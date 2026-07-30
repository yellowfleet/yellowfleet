import { CompanyInfo } from "@/types/company";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function mapRowToCompanyInfo(row: Record<string, unknown>): CompanyInfo {
  return {
    name: row.name as string,
    tagline: row.tagline as string,
    shortDescription: row.short_description as string,
    mission: row.mission as string,
    vision: row.vision as string,
    sustainabilityCommitment: row.sustainability_commitment as string,
    phone: row.phone as string,
    email: row.email as string,
    address: row.address as string,
  };
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) {
    throw new Error(`Failed to load site content: ${error?.message}`);
  }
  return mapRowToCompanyInfo(data);
}