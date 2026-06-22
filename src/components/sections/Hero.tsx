import { companyInfo } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { WakeLines } from "@/components/ui/WakeLines";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36 sm:pb-28">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Electric Marine Mobility · India
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            {companyInfo.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            {companyInfo.shortDescription}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/fleet">Explore the fleet</Button>
            <Button href="/contact" variant="outline-light">
              Start a conversation
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Signature wake motif trailing beneath the hero, as if cut by a vessel passing through */}
      <Reveal delay={0.4} className="relative">
        <WakeLines className="h-32 w-full text-gold sm:h-40" stroke="currentColor" />
      </Reveal>
    </section>
  );
}
