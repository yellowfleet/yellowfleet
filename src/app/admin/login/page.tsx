"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const from = searchParams.get("from") || "/admin";
      router.push(from);
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Login failed.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy/5 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-navy/10 bg-white p-8 shadow-sm"
      >
        <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
          Admin login
        </h1>
        <p className="mt-1 text-sm text-navy/60">YellowFleet backend</p>

        <div className="mt-6">
          <label className="text-sm font-medium text-navy" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 text-navy outline-none transition-colors focus:border-gold"
          />
        </div>

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
