import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

/**
 * Lazy Supabase client — only initialized on first call.
 * Prevents build-time crash when env vars are not yet set.
 */
export function getSupabaseClient(): SupabaseClient {
  if (_client) return _client;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase env vars are not configured.");
  }

  _client = createClient(supabaseUrl, supabaseAnonKey);
  return _client;
}

// Keep a default export for convenience
export const supabase = {
  from: (table: string) => getSupabaseClient().from(table),
};