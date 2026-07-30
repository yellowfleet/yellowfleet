import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";

export async function GET() {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase.from("site_content").select("*").eq("id", 1).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ content: data });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request body." }, { status: 400 });

  const allowedFields = [
    "name", "tagline", "short_description", "mission", "vision",
    "sustainability_commitment", "phone", "email", "address",
  ];
  const update: Record<string, unknown> = {};
  for (const field of allowedFields) if (field in body) update[field] = body[field];

  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase.from("site_content").update(update).eq("id", 1).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ content: data });
}