import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Client-side Supabase client. Safe to use in client components.
 * Used for inserts like the contact inquiry form.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
