import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

// NOTE: this route is protected by middleware.ts (matcher includes /api/admin/:path*),
// which checks the yf_admin_session cookie before requests reach here.

export async function GET() {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("vessels")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ vessels: data });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.name !== "string" || !body.name.trim()) {
    return NextResponse.json({ error: "Vessel name is required." }, { status: 400 });
  }

  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("vessels")
    .insert({
      name: body.name,
      description: body.description ?? null,
      full_description: body.full_description ?? null,
      capacity: body.capacity ?? null,
      hull_material: body.hull_material ?? null,
      speed_knots: body.speed_knots ?? null,
      hull_type: body.hull_type ?? null,
      class: body.class ?? null,
      length_m: body.length_m ?? null,
      breadth_m: body.breadth_m ?? null,
      draft_m: body.draft_m ?? null,
      air_draft_m: body.air_draft_m ?? null,
      freeboard_m: body.freeboard_m ?? null,
      dwt_t: body.dwt_t ?? null,
      range_km: body.range_km ?? null,
      image_url: body.image_url ?? null,
      images: body.images ?? null,
      active: body.active ?? true,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/fleet");

  return NextResponse.json({ vessel: data }, { status: 201 });
}