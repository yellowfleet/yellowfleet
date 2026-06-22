import { Vessel } from "@/types/vessel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const specs = [
  { label: "Capacity", key: "capacity" as const, suffix: " passengers" },
  { label: "Range", key: "range_km" as const, suffix: " km" },
  { label: "Top speed", key: "speed_knots" as const, suffix: " knots" },
];

export function FeaturedVessel({ vessel }: { vessel: Vessel }) {
  return (
    <section className="bg-navy px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={vessel.image_url}
              alt={vessel.name}
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionLabel>Featured vessel</SectionLabel>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            {vessel.name}
          </h2>
          <p className="mt-4 max-w-md text-white/70">{vessel.description}</p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {specs.map((spec) => (
              <div key={spec.key}>
                <dt className="text-xs font-medium uppercase tracking-wide text-white/50">
                  {spec.label}
                </dt>
                <dd className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-gold">
                  {vessel[spec.key]}
                  <span className="text-sm font-normal text-white/60">
                    {spec.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Button href="/fleet" variant="outline-light" className="mt-8">
            View the full fleet
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
