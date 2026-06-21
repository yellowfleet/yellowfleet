import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client. Use inside Server Components, Route
 * Handlers, or Server Actions. Do not import this from client components.
 */
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseAnonKey);
}
