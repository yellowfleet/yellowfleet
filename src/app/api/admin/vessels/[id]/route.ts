import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase.from("vessels").select("*").eq("id", id).single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
  return NextResponse.json({ vessel: data });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const allowedFields = [
    "name",
    "description",
    "full_description",
    "capacity",
    "hull_material",
    "speed_knots",
    "hull_type",
    "class",
    "length_m",
    "breadth_m",
    "draft_m",
    "air_draft_m",
    "freeboard_m",
    "dwt_t",
    "range_km",
    "image_url",
    "images",
    "active",
  ];
  const update: Record<string, unknown> = {};
  for (const field of allowedFields) {
    if (field in body) update[field] = body[field];
  }

  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("vessels")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/fleet");
  revalidatePath(`/fleet/${id}`);

  return NextResponse.json({ vessel: data });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("vessels").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/fleet");

  return NextResponse.json({ ok: true });
}