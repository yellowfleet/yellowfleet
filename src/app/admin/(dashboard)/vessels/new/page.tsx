import { VesselForm } from "../VesselForm";

export default function NewVesselPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
        Add vessel
      </h1>
      <div className="mt-6">
        <VesselForm />
      </div>
    </div>
  );
}
