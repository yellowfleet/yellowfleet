import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sustainability | YellowFleet",
  description:
    "How electric marine mobility reduces emissions, noise, and operating cost compared to diesel-powered vessels.",
};

const topics = [
  {
    category: "Emissions",
    title: "Reduced emissions",
    description:
      "Electric propulsion eliminates tailpipe emissions entirely, removing a meaningful source of pollution from ports, harbours, and coastal waterways.",
  },
  {
    category: "Noise",
    title: "Noise reduction",
    description:
      "Without a combustion engine, electric vessels operate near-silently — better for marine life, waterfront communities, and passenger comfort.",
  },
  {
    category: "Cost",
    title: "Lower operating costs",
    description:
      "Electric drivetrains have fewer moving parts and no fuel costs, reducing total cost of ownership over a vessel's lifetime compared to diesel.",
  },
  {
    category: "Policy",
    title: "Government sustainability alignment",
    description:
      "Built to align with India's clean transport and emissions targets, supporting public infrastructure initiatives like water metro systems.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title="Why electric marine transport matters"
        description="Every design decision starts from the same question: how does this reduce environmental impact without compromising reliability?"
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {topics.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 0.08}>
              <div className="grid gap-4 border-t border-navy/10 pt-8 sm:grid-cols-[200px_1fr]">
                <SectionLabel tone="navy">{topic.category}</SectionLabel>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                    {topic.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-navy/70">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
