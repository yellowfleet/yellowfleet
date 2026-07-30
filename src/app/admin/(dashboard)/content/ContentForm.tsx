"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type ContentRow = {
  name: string; tagline: string; short_description: string; mission: string;
  vision: string; sustainability_commitment: string; phone: string; email: string; address: string;
};

export function ContentForm({ content }: { content: ContentRow }) {
  const router = useRouter();
  const [form, setForm] = useState(content);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof ContentRow>(key: K, value: ContentRow[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) {
      setSaved(true);
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <Field label="Company name" value={form.name} onChange={(v) => update("name", v)} />
      <Field label="Tagline" value={form.tagline} onChange={(v) => update("tagline", v)} />
      <Field label="Short description" value={form.short_description} onChange={(v) => update("short_description", v)} area />
      <Field label="Mission" value={form.mission} onChange={(v) => update("mission", v)} area />
      <Field label="Vision" value={form.vision} onChange={(v) => update("vision", v)} area />
      <Field label="Sustainability commitment" value={form.sustainability_commitment} onChange={(v) => update("sustainability_commitment", v)} area />
      <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />
      <Field label="Email" value={form.email} onChange={(v) => update("email", v)} />
      <Field label="Address" value={form.address} onChange={(v) => update("address", v)} area />

      {error && <p className="text-sm text-red-600">{error}</p>}
      {saved && <p className="text-sm text-green-600">Saved.</p>}

      <button type="submit" disabled={loading} className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white disabled:opacity-60">
        {loading ? "Saving…" : "Save changes"}
      </button>
    </form>
  );
}

function Field({ label, value, onChange, area }: { label: string; value: string; onChange: (v: string) => void; area?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      {area ? (
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border px-4 py-3" />
      )}
    </div>
  );
}