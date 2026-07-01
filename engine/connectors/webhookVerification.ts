/**
 * lib/connectors/webhookVerification.ts
 *
 * Pure helper functions for:
 *   1. Webhook subscription verification challenge responses
 *      - YouTube WebSub (PubSubHubbub) hub.challenge
 *      - Meta/Instagram hub.mode=subscribe hub.challenge
 *   2. Cron endpoint authorisation check
 *
 * No network calls, no DB calls, no server-only import.
 * Safe to import and test in vitest.
 *
 * AXIOM 4 — Security by Default: empty verify tokens are rejected and
 * configured tokens are compared directly against provider challenge input.
 */


export function extractYouTubeWebSubChallenge(params: URLSearchParams): string | null {
  const mode = params.get('hub.mode');
  const challenge = params.get('hub.challenge');
  if ((mode === 'subscribe' || mode === 'unsubscribe') && challenge) {
    return challenge;
  }
  return null;
}


export function extractMetaWebhookChallenge(
  params: URLSearchParams,
  expectedToken: string,
): string | null {
  const configuredToken = expectedToken.trim();
  if (!configuredToken) {
    return null;
  }

  const mode = params.get('hub.mode');
  const token = params.get('hub.verify_token');
  const challenge = params.get('hub.challenge');
  if (mode === 'subscribe' && token === configuredToken && challenge) {
    return challenge;
  }
  return null;
}


export function isCronAuthorised(
  authHeader: string | null,
  cronSecret: string | undefined,
  nodeEnv: string | undefined,
): boolean {
  if (cronSecret) {
    return authHeader === `Bearer ${cronSecret}`;
  }
  
  return nodeEnv !== 'production';
}
