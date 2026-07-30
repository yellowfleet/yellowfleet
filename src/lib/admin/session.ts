import "server-only";

const COOKIE_NAME = "yf_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("Missing ADMIN_SESSION_SECRET env var.");
  return secret;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toHex(signature);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

export async function createSessionToken(): Promise<string> {
  const expiry = Date.now() + SESSION_TTL_SECONDS * 1000;
  const payload = String(expiry);
  const signature = await sign(payload);
  return `${payload}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = await sign(payload);
  if (!timingSafeEqual(expected, signature)) return false;
  const expiry = Number(payload);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;
  return true;
}

export async function checkPassword(candidate: string): Promise<boolean> {
  const actual = process.env.ADMIN_PASSWORD;
  if (!actual) throw new Error("Missing ADMIN_PASSWORD env var.");
  return timingSafeEqual(candidate, actual);
}

export { COOKIE_NAME, SESSION_TTL_SECONDS };