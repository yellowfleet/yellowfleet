import { Metadata } from "next";
import { companyInfo } from "@/content/company";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `About | ${companyInfo.name}`,
  description: companyInfo.mission,
};

const pillars = [
  {
    label: "Mission",
    text: companyInfo.mission,
  },
  {
    label: "Vision",
    text: companyInfo.vision,
  },
  {
    label: "Sustainability commitment",
    text: companyInfo.sustainabilityCommitment,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About YellowFleet"
        title="Building India's electric marine future"
        description="We're an early-stage company focused on replacing diesel-powered marine transport with electric alternatives — starting with catamarans."
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.1}>
              <div className="grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-[200px_1fr]">
                <SectionLabel tone="navy">{pillar.label}</SectionLabel>
                <p className="text-lg leading-relaxed text-navy/80">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-offwhite px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel tone="navy">Future of marine mobility</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-navy">
              From a single electric catamaran route to a fleet supporting
              water metro systems, sustainable tourism, and public marine
              infrastructure across India.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
