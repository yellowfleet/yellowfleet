import { supabase } from "@/lib/supabase/client";
import { ContactInquiry } from "@/types/company";

/**
 * Inserts a contact inquiry into the `contact_inquiries` table.
 * Client-side function — called from the contact form (client component).
 */
export async function submitContactInquiry(
  inquiry: Omit<ContactInquiry, "id" | "created_at">
) {
  const { error } = await supabase.from("contact_inquiries").insert([inquiry]);

  if (error) {
    throw new Error(error.message);
  }
}
