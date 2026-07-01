import { resolveSafeNextPath } from "@/supabase/auth/nextRedirect";
import { SUPABASE_CONFIG } from "@/supabase/config";
import { createServerClientWithCustomCookies } from "@/supabase/server/serverClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";



export async function GET(request: Request ): Promise<NextResponse> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");

  
  const safeNext = resolveSafeNextPath(next);

  
  if (error) {
    const loginUrl = new URL("/login", url.origin);
    loginUrl.searchParams.set("error", error);
    if (errorDescription) {
      loginUrl.searchParams.set("error_description", errorDescription);
    }
    return NextResponse.redirect(loginUrl);
  }

  
  const redirectUrl = new URL(safeNext, url.origin);
  const response = NextResponse.redirect(redirectUrl);

  if (!code) return response;

  if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return response;
  type CookieToSet = {
    name: string;
    value: string;
    options?: Parameters<typeof response.cookies.set>[2];
  };

  
  
  
  
  
  
  
  const cookieStore = await cookies();

  const supabase = createServerClientWithCustomCookies(
    () => cookieStore.getAll(),
    (cookiesToSet: CookieToSet[]) => {
      cookiesToSet.forEach(({ name, value, options }) => {
        response.cookies.set(name, value, options);
      });
    }
  );

  try {
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
    if (exchangeError) {
      
      const loginUrl = new URL("/login", url.origin);
      loginUrl.searchParams.set("error", "exchange_failed");
      loginUrl.searchParams.set("error_description", exchangeError.message);
      return NextResponse.redirect(loginUrl);
    }
  } catch (err: unknown) {
    
    
    const loginUrl = new URL("/login", url.origin);
    loginUrl.searchParams.set("error", "exchange_failed");
    loginUrl.searchParams.set(
      "error_description",
      (err as { message?: string })?.message ?? "Unexpected error during sign-in"
    );
    return NextResponse.redirect(loginUrl);
  }

  return response;
}
