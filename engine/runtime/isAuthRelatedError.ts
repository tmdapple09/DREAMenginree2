import { toErrorMessage } from '@/utils/index';











const AUTH_ERROR_PATTERNS = [
  /\bauth/i,            
  /\bjwt\b/i,
  /\btoken\b/i,
  /\bsession\b/i,
  /\bsign.?in\b/i,
  /\bsign.?out\b/i,
  /\bunauthori[sz]ed\b/i,
  /\bforbidden\b/i,
  /\b(invalid|expired|revoked|missing).*(token|session|credential)/i,
  /\b(refresh|access).*(token|session)/i,
  /\b401\b/,
  /\b403\b/,
] as const;










export function isAuthRelatedError(error: unknown): boolean {
  if (!error) return false;

  const message =
    (error instanceof Error ? toErrorMessage(error) : String(error)) ?? '';
  const name = error instanceof Error ? (error.name ?? '') : '';

  const haystack = `${name} ${message}`.toLowerCase();

  return AUTH_ERROR_PATTERNS.some((pattern) => pattern.test(haystack));
}






