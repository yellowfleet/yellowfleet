import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    metric: "Zero Emmissions",
    unit: "",
    description:
      "Electric propulsion removes diesel exhaust entirely from coastal and inland waterways.",
  },
  {
    metric: "Lower Noise",
    unit: "",
    description:
      "No combustion noise means quieter ports, marinas, and passenger journeys.",
  },
  {
    metric: "Lower Cost",
    unit: "",
    description:
      "Electric drivetrains cut fuel and maintenance costs compared to diesel engines.",
  },
];

export function WhyElectric() {
  return (
    <section className="bg-offwhite px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Why electric marine transport</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold text-navy sm:text-4xl">
            A quieter, cleaner alternative to diesel-powered vessels
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.metric} delay={0.1 * (i + 1)}>
              <div className="border-t-2 border-gold pt-6">
                <div className="font-[family-name:var(--font-display)] text-3xl font-semibold text-navy">
                  {reason.metric}
                </div>
                <div className="mt-1 text-sm font-medium text-navy/60">
                  {reason.unit}
                </div>
                <p className="mt-4 text-base leading-relaxed text-navy/70">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
