import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { ContentForm } from "./ContentForm";

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  const supabase = createAdminSupabaseClient();
  const { data: content, error } = await supabase.from("site_content").select("*").eq("id", 1).single();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Site content</h1>
      <p className="mt-1 text-sm text-gray-500">
        Company-wide copy shown across the homepage, about page, footer, and metadata.
      </p>
      {error && <p className="mt-4 text-sm text-red-600">Failed to load content: {error.message}</p>}
      {content && <div className="mt-6"><ContentForm content={content} /></div>}
    </div>
  );
}