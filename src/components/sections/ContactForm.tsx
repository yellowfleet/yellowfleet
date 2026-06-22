import { ContactInquiry } from "@/types/company";

/**
 * TODO: Wire up to Supabase once project is configured.
 * Currently a no-op so the site builds and deploys without Supabase env vars.
 */
export async function submitContactInquiry(
  inquiry: Omit<ContactInquiry, "id" | "created_at">
) {
  console.log("Contact inquiry (Supabase not yet configured):", inquiry);
  // Simulate a short delay
  await new Promise((resolve) => setTimeout(resolve, 800));
}