import { createAdminSupabaseClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const supabase = createAdminSupabaseClient();
  const { data: inquiries, error } = await supabase
    .from("contact_inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
        Contact inquiries
      </h1>
      <p className="mt-1 text-sm text-navy/60">
        {inquiries?.length ?? 0} total submission{inquiries?.length === 1 ? "" : "s"}
      </p>

      {error && (
        <p className="mt-4 text-sm text-red-600">Failed to load inquiries: {error.message}</p>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-navy/10 bg-navy/5 text-navy/70">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Message</th>
              <th className="px-4 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {(inquiries ?? []).map((inq) => (
              <tr key={inq.id} className="border-b border-navy/5 last:border-0">
                <td className="px-4 py-3 text-navy">{inq.name}</td>
                <td className="px-4 py-3 text-navy/80">{inq.email}</td>
                <td className="px-4 py-3 text-navy/80">{inq.phone || "—"}</td>
                <td className="px-4 py-3 text-navy/80">{inq.company || "—"}</td>
                <td className="max-w-xs truncate px-4 py-3 text-navy/80" title={inq.message}>
                  {inq.message}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-navy/60">
                  {new Date(inq.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
            {(inquiries ?? []).length === 0 && !error && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-navy/50">
                  No inquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
