"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Vessel } from "@/types/vessel";

type Props = {
  vessel?: Partial<Vessel> & { id?: string };
};

const NUMERIC_FIELDS = [
  "capacity",
  "speed_knots",
  "length_m",
  "breadth_m",
  "draft_m",
  "air_draft_m",
  "freeboard_m",
  "dwt_t",
  "range_km",
] as const;

export function VesselForm({ vessel }: Props) {
  const router = useRouter();
  const isEdit = Boolean(vessel?.id);
  const [form, setForm] = useState({
    name: vessel?.name ?? "",
    description: vessel?.description ?? "",
    full_description: vessel?.fullDescription ?? "",
    capacity: vessel?.capacity ?? "",
    hull_material: vessel?.hull_material ?? "",
    speed_knots: vessel?.speed_knots ?? "",
    hull_type: vessel?.hull_type ?? "",
    class: vessel?.class ?? "",
    length_m: vessel?.length_m ?? "",
    breadth_m: vessel?.breadth_m ?? "",
    draft_m: vessel?.draft_m ?? "",
    air_draft_m: vessel?.air_draft_m ?? "",
    freeboard_m: vessel?.freeboard_m ?? "",
    dwt_t: vessel?.dwt_t ?? "",
    range_km: vessel?.range_km ?? "",
    image_url: vessel?.image_url ?? "",
    images: (vessel?.images ?? []).join("\n"),
    active: vessel?.active ?? true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload: Record<string, unknown> = {
      name: form.name,
      description: form.description || null,
      full_description: form.full_description || null,
      hull_material: form.hull_material || null,
      hull_type: form.hull_type || null,
      class: form.class || null,
      image_url: form.image_url || null,
      images: form.images
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      active: form.active,
    };
    for (const field of NUMERIC_FIELDS) {
      const raw = form[field];
      payload[field] = raw === "" ? null : Number(raw);
    }

    const url = isEdit ? `/api/admin/vessels/${vessel!.id}` : "/api/admin/vessels";
    const method = isEdit ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) {
      router.push("/admin/vessels");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      <Section title="Basics">
        <TextField label="Name" value={form.name} onChange={(v) => update("name", v)} required />
        <TextAreaField
          label="Short description"
          value={form.description}
          onChange={(v) => update("description", v)}
        />
        <TextAreaField
          label="Full description"
          value={form.full_description}
          onChange={(v) => update("full_description", v)}
          rows={5}
        />
      </Section>

      <Section title="Specs">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <TextField label="Capacity" value={String(form.capacity)} onChange={(v) => update("capacity", v)} type="number" />
          <TextField label="Speed (knots)" value={String(form.speed_knots)} onChange={(v) => update("speed_knots", v)} type="number" />
          <TextField label="Range (km)" value={String(form.range_km)} onChange={(v) => update("range_km", v)} type="number" />
          <TextField label="Hull material" value={form.hull_material} onChange={(v) => update("hull_material", v)} />
          <TextField label="Hull type" value={form.hull_type} onChange={(v) => update("hull_type", v)} />
          <TextField label="Class" value={form.class} onChange={(v) => update("class", v)} />
          <TextField label="Length (m)" value={String(form.length_m)} onChange={(v) => update("length_m", v)} type="number" step="0.1" />
          <TextField label="Breadth (m)" value={String(form.breadth_m)} onChange={(v) => update("breadth_m", v)} type="number" step="0.1" />
          <TextField label="Draft (m)" value={String(form.draft_m)} onChange={(v) => update("draft_m", v)} type="number" step="0.1" />
          <TextField label="Air draft (m)" value={String(form.air_draft_m)} onChange={(v) => update("air_draft_m", v)} type="number" step="0.1" />
          <TextField label="Freeboard (m)" value={String(form.freeboard_m)} onChange={(v) => update("freeboard_m", v)} type="number" step="0.1" />
          <TextField label="DWT (t)" value={String(form.dwt_t)} onChange={(v) => update("dwt_t", v)} type="number" step="0.1" />
        </div>
      </Section>

      <Section title="Media">
        <TextField label="Primary image URL" value={form.image_url} onChange={(v) => update("image_url", v)} />
        <div>
          <label className="text-sm font-medium text-navy">Gallery image URLs (one per line)</label>
          <textarea
            rows={4}
            value={form.images}
            onChange={(e) => update("images", e.target.value)}
            className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 text-navy outline-none transition-colors focus:border-gold"
          />
        </div>
      </Section>

      <Section title="Status">
        <label className="flex items-center gap-2 text-sm text-navy">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => update("active", e.target.checked)}
          />
          Active (visible on public site)
        </label>
      </Section>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light disabled:opacity-60"
        >
          {loading ? "Saving…" : isEdit ? "Save changes" : "Create vessel"}
        </button>
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6">
      <h2 className="mb-4 font-semibold text-navy">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  step,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  step?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        step={step}
        required={required}
        value={value === "null" ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 text-navy outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 text-navy outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
