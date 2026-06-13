import {
    CRASH_REPORT_MAX_BYTES,
    isActiveCartridge,
    recordCrashReport,
} from '@/lib/gameengin/brain-reader';
import { NextResponse, type NextRequest } from 'next/server';
import { toErrorMessage } from '@/lib/utils';

/**
 * app/api/gameengin/crash-report/route.ts
 *
 * Crash-report ingest endpoint for the Brain feedback loop described in the
 * directive: "When a cartridge crashes or hits a critical bug, a window
 * opens. The player can send a statement directly to Maestro describing
 * what happened. That feedback goes straight into the Brain — into the
 * Project History for that cartridge."
 *
 * Server-only; writes to lib/gameengin/brain/crash-reports/<cartridge_id>/.
 *
 * Hard-rules:
 *   - Reports are accepted only for cartridges in active-projects.json
 *     (the Two-Project Rule). Inactive cartridges → 404 (Upgrader's domain).
 *   - 16 KB payload cap, enforced before disk write.
 *   - cartridge_id must be a slug; player_statement must be non-empty.
 */

const ALLOWED_KEYS = new Set([
  'cartridge_id',
  'player_statement',
  'version',
  'error',
  'context',
]);

type CrashJsonPrimitive = string | number | boolean | null;
type CrashJsonValue = CrashJsonPrimitive | CrashJsonValue[] | { [key: string]: CrashJsonValue };
type CrashPayloadRecord = { [key: string]: CrashJsonValue };

interface CrashErrorPayload {
  readonly name?: string;
  readonly message?: string;
  readonly stack?: string;
}

function isCrashPayloadRecord(value: CrashJsonValue | null): value is CrashPayloadRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseCrashJson(raw: string): CrashJsonValue | null {
  try {
    return JSON.parse(raw) as CrashJsonValue;
  } catch {
    return null;
  }
}

function pick(payload: CrashPayloadRecord): CrashPayloadRecord {
  const cleaned: CrashPayloadRecord = {};
  for (const key of Object.keys(payload)) {
    if (ALLOWED_KEYS.has(key)) cleaned[key] = payload[key];
  }
  return cleaned;
}

function asString(value: CrashJsonValue | undefined): string {
  return typeof value === 'string' ? value : '';
}

function asCrashRecord(value: CrashJsonValue | undefined): Record<string, CrashJsonValue> | undefined {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, CrashJsonValue>
    : undefined;
}

function asCrashError(value: CrashJsonValue | undefined): CrashErrorPayload | undefined {
  const record = asCrashRecord(value);
  if (!record) return undefined;
  return {
    name: typeof record.name === 'string' ? record.name : undefined,
    message: typeof record.message === 'string' ? record.message : undefined,
    stack: typeof record.stack === 'string' ? record.stack : undefined,
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ error: 'unreadable body' }, { status: 400 });
  }

  if (Buffer.byteLength(raw, 'utf8') > CRASH_REPORT_MAX_BYTES) {
    return NextResponse.json({ error: 'payload too large' }, { status: 413 });
  }

  const parsed = parseCrashJson(raw);
  if (!parsed || !isCrashPayloadRecord(parsed)) {
    return NextResponse.json({ error: 'invalid payload' }, { status: 400 });
  }

  const safe = pick(parsed);
  const cartridgeId = asString(safe.cartridge_id);
  const statement = asString(safe.player_statement);

  if (!/^[a-z0-9][a-z0-9-]{0,63}$/.test(cartridgeId)) {
    return NextResponse.json({ error: 'invalid cartridge_id' }, { status: 400 });
  }

  if (statement.trim().length === 0) {
    return NextResponse.json({ error: 'player_statement is required' }, { status: 400 });
  }

  if (!isActiveCartridge(cartridgeId)) {
    return NextResponse.json(
      { error: 'cartridge is not an active project' },
      { status: 404 },
    );
  }

  try {
    const filePath = recordCrashReport({
      cartridge_id: cartridgeId,
      player_statement: statement,
      version: asString(safe.version) || undefined,
      error: asCrashError(safe.error),
      context: asCrashRecord(safe.context),
    });

    return NextResponse.json({ ok: true, stored: filePath.split(/[\/]/).slice(-3).join('/') }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? toErrorMessage(err) : 'failed to record crash report' },
      { status: 400 },
    );
  }
}
