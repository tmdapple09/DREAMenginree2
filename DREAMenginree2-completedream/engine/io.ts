/**
 * engine/io.ts
 *
 * Re-exports Supabase client types consumed via the `@/engine/io` alias.
 * Multiple subsystems (lib/ai, lib/collaboration, lib/connectors, lib/dreamdm,
 * lib/dreamr, lib/feed, lib/ledger, lib/sharedDream) import SupabaseClient
 * through this path to stay decoupled from the concrete Supabase package.
 */
export type { SupabaseClient } from '@supabase/supabase-js';
export type { RealtimePostgresInsertPayload } from '@supabase/supabase-js';
