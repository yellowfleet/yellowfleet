import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "0", label: "Emissions at point of operation" },
  { value: "↓", label: "Underwater and surface noise" },
  { value: "↓", label: "Lifetime operating cost vs. diesel" },
];

export function SustainabilityImpact() {
  return (
    <section className="bg-offwhite px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel tone="navy">Sustainability impact</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-navy sm:text-4xl">
            Built to align with India&apos;s clean transport goals
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * (i + 1)} className="bg-white p-10 text-center">
              <div className="font-[family-name:var(--font-display)] text-5xl font-semibold text-gold">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-navy/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
