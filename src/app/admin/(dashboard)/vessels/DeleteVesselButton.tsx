"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteVesselButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setLoading(true);
    const res = await fetch(`/api/admin/vessels/${id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      alert("Failed to delete vessel.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="font-medium text-red-600 hover:underline disabled:opacity-60"
    >
      {loading ? "Deleting…" : "Delete"}
    </button>
  );
}
