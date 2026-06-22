import { Button } from "@/components/ui/Button";
import { WakeLines } from "@/components/ui/WakeLines";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gold px-6 py-24 text-navy">
      <WakeLines
        className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-[140%] -translate-x-1/2 text-navy"
        stroke="currentColor"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Let&apos;s talk about electric marine mobility for Maharashtra
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-navy/80">
            Whether it&apos;s a pilot route, a partnership, or a government
            infrastructure initiative — we&apos;d like to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <Button
              href="/contact"
              variant="outline-dark"
              className="bg-navy text-white hover:bg-navy-light"
            >
              Get in touch
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
