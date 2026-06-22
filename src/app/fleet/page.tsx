import { Metadata } from "next";
import { getFleet } from "@/lib/queries/fleet";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Fleet | YellowFleet",
  description: "Electric catamarans built for India's coastal and inland waterways.",
};

const specs = [
  { label: "Capacity", key: "capacity" as const, suffix: " passengers" },
  { label: "Range", key: "range_km" as const, suffix: " km" },
  { label: "Top speed", key: "speed_knots" as const, suffix: " knots" },
];

export default async function FleetPage() {
  const fleet = await getFleet();

  return (
    <>
      <PageHeader
        eyebrow="Fleet"
        title="Electric catamarans, built for the water"
        description="Each vessel is designed for quiet, low-wake operation — engineered as a cleaner alternative to diesel-powered transport."
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-px overflow-hidden rounded-2xl bg-navy/10">
          {fleet.map((vessel, i) => (
            <Reveal key={vessel.id} delay={i * 0.1}>
              <div className="grid gap-8 bg-white p-8 sm:grid-cols-[1fr_1.2fr] sm:p-10">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-offwhite">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vessel.image_url}
                    alt={vessel.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
                    {vessel.name}
                  </h2>
                  <p className="mt-3 text-navy/70">{vessel.description}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-navy/10 pt-6">
                    {specs.map((spec) => (
                      <div key={spec.key}>
                        <dt className="text-xs font-medium uppercase tracking-wide text-navy/50">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                          {vessel[spec.key]}
                          <span className="text-sm font-normal text-navy/50">
                            {spec.suffix}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {fleet.length === 0 && (
          <p className="mx-auto max-w-md py-16 text-center text-navy/60">
            Fleet details are being finalized — check back soon.
          </p>
        )}
      </section>
    </>
  );
}
