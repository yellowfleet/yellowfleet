import Link from "next/link";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { DeleteVesselButton } from "./DeleteVesselButton";

export const dynamic = "force-dynamic";

export default async function AdminVesselsPage() {
  const supabase = createAdminSupabaseClient();
  const { data: vessels, error } = await supabase
    .from("vessels")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
          Vessels
        </h1>
        <Link
          href="/admin/vessels/new"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-light"
        >
          Add vessel
        </Link>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600">Failed to load vessels: {error.message}</p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(vessels ?? []).map((v) => (
          <div key={v.id} className="rounded-2xl border border-navy/10 bg-white p-5">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-navy">{v.name}</h2>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  v.active ? "bg-green-100 text-green-700" : "bg-navy/10 text-navy/50"
                }`}
              >
                {v.active ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-navy/60">{v.description}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link href={`/admin/vessels/${v.id}`} className="font-medium text-navy hover:underline">
                Edit
              </Link>
              <DeleteVesselButton id={v.id} name={v.name} />
            </div>
          </div>
        ))}
        {(vessels ?? []).length === 0 && !error && (
          <p className="col-span-full text-center text-navy/50">No vessels yet.</p>
        )}
      </div>
    </div>
  );
}
