import { Vessel } from "@/types/vessel";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function mapRowToVessel(row: Record<string, unknown>): Vessel {
  return {
    id: row.id as string,
    name: row.name as string,
    description: row.description as string,
    fullDescription: (row.full_description as string) ?? undefined,
    capacity: row.capacity as number,
    hull_material: (row.hull_material as string) ?? undefined,
    speed_knots: row.speed_knots as number,
    hull_type: (row.hull_type as string) ?? undefined,
    class: (row.class as string) ?? undefined,
    length_m: (row.length_m as number) ?? undefined,
    breadth_m: (row.breadth_m as number) ?? undefined,
    draft_m: (row.draft_m as number) ?? undefined,
    air_draft_m: (row.air_draft_m as number) ?? undefined,
    freeboard_m: (row.freeboard_m as number) ?? undefined,
    dwt_t: (row.dwt_t as number) ?? undefined,
    range_km: row.range_km as number,
    image_url: row.image_url as string,
    images: (row.images as string[]) ?? undefined,
    active: row.active as boolean,
    created_at: (row.created_at as string) ?? undefined,
  };
}

export async function getFleet(): Promise<Vessel[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("vessels")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("getFleet error:", error.message);
    return [];
  }
  return (data ?? []).map(mapRowToVessel);
}

export async function getVesselById(id: string): Promise<Vessel | undefined> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("vessels")
    .select("*")
    .eq("id", id)
    .eq("active", true)
    .single();

  if (error || !data) return undefined;
  return mapRowToVessel(data);
}