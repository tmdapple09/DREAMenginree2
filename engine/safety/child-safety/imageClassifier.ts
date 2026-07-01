import { groqChat } from '@/dr-eams/ai/groq';
import { toErrorMessage } from '@/utils/index';





























export type ImageRiskLevel = 'none' | 'low' | 'medium' | 'high' | 'certain';

export interface ImageClassificationResult {
  
  flagged: boolean;
  
  risk: ImageRiskLevel;
  
  confidence: number;
  
  severity: number;
  
  skipped: boolean;
  
  error?: string;
}





const RISK_TO_SEVERITY: Record<ImageRiskLevel, number> = {
  none:    0.00,
  low:     0.25,
  medium:  0.60,
  high:    0.90,
  certain: 1.00,
};

const FLAGGED_RISK_LEVELS: ImageRiskLevel[] = ['medium', 'high', 'certain'];


const MIN_CONFIDENCE_FOR_FLAG = 0.55;







const CLASSIFICATION_SYSTEM_PROMPT = `You are a child safety content classifier.
Your ONLY job is to assess whether an image contains or depicts child sexual abuse material (CSAM).

OUTPUT FORMAT: Respond with ONLY valid JSON on a single line. No other text.
{ "risk": "<none|low|medium|high|certain>", "confidence": <0.0-1.0> }

RISK LEVELS:
- none: No minor present in sexual context. Standard safe content.
- low: Ambiguous — possible minor, no explicit content. Warrants review.
- medium: Apparent minor present with suggestive or inappropriate context.
- high: Strong indicators of CSAM — minor in explicit or sexual situation.
- certain: Definite CSAM — minor depicted in sexual abuse material.

RULES:
- DO NOT describe image content in any other output.
- DO NOT produce any other text besides the JSON object.
- When uncertain, choose a lower risk level and lower confidence score.
- Confidence reflects how certain you are of the risk level chosen.`;





interface LLMVerdictRaw {
  risk?: unknown;
  confidence?: unknown;
}

const VALID_RISK_LEVELS: ImageRiskLevel[] = ['none', 'low', 'medium', 'high', 'certain'];

function parseVerdict(raw: string): { risk: ImageRiskLevel; confidence: number } {
  
  const cleaned = raw.replace(/```[a-z]*\n?/gi, '').trim();

  let json: LLMVerdictRaw;
  try {
    json = JSON.parse(cleaned) as LLMVerdictRaw;
  } catch {
    // Try to extract JSON object from surrounding text
    const match = cleaned.match(/\{[^}]+\}/);
    if (!match) throw new Error(`Could not parse LLM verdict: ${cleaned.slice(0, 200)}`);
    json = JSON.parse(match[0]) as LLMVerdictRaw;
  }

  const risk = typeof json.risk === 'string' && VALID_RISK_LEVELS.includes(json.risk as ImageRiskLevel)
    ? (json.risk as ImageRiskLevel)
    : 'none';

  const rawConf = typeof json.confidence === 'number' ? json.confidence : parseFloat(String(json.confidence));
  const confidence = Number.isFinite(rawConf) ? Math.max(0, Math.min(1, rawConf)) : 0.5;

  return { risk, confidence };
}

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * classifyImage — runs the Groq vision model against a base64-encoded image.
 *
 * Returns an ImageClassificationResult. Never throws — errors are surfaced in
 * the `error` field and `skipped: true`.
 *
 * @param imageBase64 - Base64-encoded image data (without the data: URI prefix).
 *                      Maximum recommended size: 4 MB decoded.
 * @param mimeType    - MIME type of the image (default: 'image/jpeg').
 */
export async function classifyImage(
  imageBase64: string,
  mimeType: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' = 'image/jpeg',
): Promise<ImageClassificationResult> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return {
      flagged: false,
      risk: 'none',
      confidence: 0,
      severity: 0,
      skipped: true,
      error: 'GROQ_API_KEY not configured — image classification skipped',
    };
  }

  // Guard against empty payloads
  if (!imageBase64 || imageBase64.length < 100) {
    return {
      flagged: false,
      risk: 'none',
      confidence: 0,
      severity: 0,
      skipped: true,
      error: 'Empty or too-small image payload',
    };
  }

  // Cap at ~5 MB base64 (~3.75 MB decoded) to stay within model limits
  if (imageBase64.length > 5_000_000) {
    return {
      flagged: false,
      risk: 'none',
      confidence: 0,
      severity: 0,
      skipped: true,
      error: 'Image payload exceeds size limit (5 MB base64)',
    };
  }

  const model = process.env.GROQ_VISION_MODEL ?? 'meta-llama/llama-4-scout-17b-16e-instruct';
  const dataUri = `data:${mimeType};base64,${imageBase64}`;

  try {
    const rawResponse = await groqChat({
      model,
      temperature: 0,
      max_tokens: 64,
      messages: [
        { role: 'system', content: CLASSIFICATION_SYSTEM_PROMPT },
        {
          role: 'user',
          // Groq vision API: content as array with image_url type
          content: JSON.stringify([
            { type: 'image_url', image_url: { url: dataUri } },
            { type: 'text', text: 'Classify this image according to your instructions.' },
          ]),
        },
      ],
    });

    const { risk, confidence } = parseVerdict(rawResponse);
    const severity = RISK_TO_SEVERITY[risk];
    const flagged = FLAGGED_RISK_LEVELS.includes(risk) && confidence >= MIN_CONFIDENCE_FOR_FLAG;

    return { flagged, risk, confidence, severity, skipped: false };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? toErrorMessage(err) : String(err);
    // On model error, return skipped (do not false-positive block content)
    return {
      flagged: false,
      risk: 'none',
      confidence: 0,
      severity: 0,
      skipped: true,
      error: `Image classification failed: ${errorMsg.slice(0, 500)}`,
    };
  }
}
