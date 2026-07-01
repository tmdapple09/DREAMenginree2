import { SUPABASE_CONFIG } from "@/supabase/config";
import { NextResponse } from "next/server";


interface SupabaseAuthSettings {
  external?: Record<string, boolean>;
}

export interface OAuthProvidersResponse {
  google: boolean | null;
  github: boolean | null;
}

export const UNKNOWN_OAUTH_PROVIDERS: OAuthProvidersResponse = {
  google: null,
  github: null,
};

export function getOAuthProvidersResponse(
  settings: SupabaseAuthSettings,
): OAuthProvidersResponse {
  const external = settings.external ?? {};

  return {
    google: typeof external.google === "boolean" ? external.google : null,
    github: typeof external.github === "boolean" ? external.github : null,
  };
}

export async function GET( ): Promise<NextResponse> {
  if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
    return NextResponse.json(UNKNOWN_OAUTH_PROVIDERS, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const res = await fetch(`${SUPABASE_CONFIG.url}/auth/v1/settings`, {
      cache: "no-store",
      headers: {
        apikey: SUPABASE_CONFIG.anonKey,
        Authorization: `Bearer ${SUPABASE_CONFIG.anonKey}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(UNKNOWN_OAUTH_PROVIDERS, {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const settings: SupabaseAuthSettings = await res.json();

    return NextResponse.json(
      getOAuthProvidersResponse(settings),
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(UNKNOWN_OAUTH_PROVIDERS, {
      headers: { "Cache-Control": "no-store" },
    });
  }
}
