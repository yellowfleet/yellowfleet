import { NextRequest, NextResponse } from "next/server";
import {
  checkPassword,
  createSessionToken,
  COOKIE_NAME,
  SESSION_TTL_SECONDS,
} from "@/lib/admin/session";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  let valid = false;
  try {
    valid = await checkPassword(password);
  } catch {
    return NextResponse.json(
      { error: "Admin auth is not configured on the server." },
      { status: 500 }
    );
  }

  if (!valid) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
