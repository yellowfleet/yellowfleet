import { companyInfo } from "@/content/company";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function VisionStatement() {
  return (
    <section className="relative z-10 bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center ">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel tone="navy">Our Vision</SectionLabel>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-navy sm:text-3xl">
            {companyInfo.vision}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
