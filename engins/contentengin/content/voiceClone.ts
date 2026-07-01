

export interface VoiceProfile {
  id: string;
  name: string;
  
  createdAt: string;
}

export interface VoiceCloneRequest {
  
  sampleBase64: string;
  
  voiceName: string;
}

export interface VoiceCloneResult {
  profile: VoiceProfile;
  message: string;
}

export interface TTSRequest {
  
  text: string;
  
  voiceId: string;
  
  stability?: number;
  
  similarityBoost?: number;
}

export interface TTSResult {
  
  audioBase64: string;
  
  durationSeconds: number;
  voiceId: string;
  
  isBrowserFallback?: boolean;
}

export interface ListVoiceProfilesResult {
  profiles: VoiceProfile[];
}



export async function cloneVoice(req: VoiceCloneRequest): Promise<VoiceCloneResult> {
  const res = await fetch('/api/content/voice-clone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'clone', ...req }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(err.error ?? `Voice clone failed (${res.status})`);
  }

  return res.json() as Promise<VoiceCloneResult>;
}

export async function textToSpeech(req: TTSRequest): Promise<TTSResult> {
  const res = await fetch('/api/content/voice-clone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'tts', ...req }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(err.error ?? `TTS failed (${res.status})`);
  }

  return res.json() as Promise<TTSResult>;
}


export async function listVoiceProfiles(): Promise<ListVoiceProfilesResult> {
  const res = await fetch('/api/content/voice-clone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'list' }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(err.error ?? `List profiles failed (${res.status})`);
  }

  return res.json() as Promise<ListVoiceProfilesResult>;
}


export async function deleteVoiceProfile(voiceId: string): Promise<{ message: string }> {
  const res = await fetch('/api/content/voice-clone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'delete', voiceId }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: string };
    throw new Error(err.error ?? `Delete profile failed (${res.status})`);
  }

  return res.json() as Promise<{ message: string }>;
}




export function speakWithBrowserTTS(
  text: string,
  voiceName?: string,
  rate = 1.0,
  pitch = 1.0
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      reject(new Error('Web Speech API is not available in this environment.'));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = Math.max(0.5, Math.min(2.0, rate));
    utterance.pitch = Math.max(0, Math.min(2.0, pitch));

    if (voiceName) {
      const voices = window.speechSynthesis.getVoices();
      const match = voices.find((v) => v.name.toLowerCase().includes(voiceName.toLowerCase()));
      if (match) utterance.voice = match;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e: SpeechSynthesisErrorEvent) => reject(new Error(`Speech synthesis error: ${e.error}`));

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(utterance);
  });
}


export function getBrowserVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices();
}




export function audioFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1] ?? result);
    };
    reader.onerror = () => reject(new Error('Failed to read audio file'));
    reader.readAsDataURL(file);
  });
}


export function estimateDurationSeconds(text: string, wordsPerMinute = 150): number {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return wordCount / (wordsPerMinute / 60);
}
