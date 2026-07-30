import { notFound } from "next/navigation";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { VesselForm } from "../VesselForm";

export const dynamic = "force-dynamic";

export default async function EditVesselPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminSupabaseClient();
  const { data: vessel, error } = await supabase
    .from("vessels")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !vessel) {
    notFound();
  }

  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
        Edit vessel
      </h1>
      <div className="mt-6">
        <VesselForm
          vessel={{
            id: vessel.id,
            name: vessel.name,
            description: vessel.description,
            fullDescription: vessel.full_description,
            capacity: vessel.capacity,
            hull_material: vessel.hull_material,
            speed_knots: vessel.speed_knots,
            hull_type: vessel.hull_type,
            class: vessel.class,
            length_m: vessel.length_m,
            breadth_m: vessel.breadth_m,
            draft_m: vessel.draft_m,
            air_draft_m: vessel.air_draft_m,
            freeboard_m: vessel.freeboard_m,
            dwt_t: vessel.dwt_t,
            range_km: vessel.range_km,
            image_url: vessel.image_url,
            images: vessel.images ?? [],
            active: vessel.active,
          }}
        />
      </div>
    </div>
  );
}
