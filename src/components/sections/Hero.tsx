import { companyInfo } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { WakeLines } from "@/components/ui/WakeLines";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-navy text-white flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Left-to-right gradient overlay: solid navy on left fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
        {/* Bottom fade into the wake section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36">
          <div className="max-w-xl">
            <Reveal direction="left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Electric Marine Mobility · India
              </span>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
                {companyInfo.tagline}
              </h1>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="mt-6 text-base text-white/70 sm:text-lg">
                {companyInfo.shortDescription}
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/fleet">Explore the fleet</Button>
                <Button href="/contact" variant="outline-light">
                  Start a conversation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Wake lines transitioning out of the hero */}
      <div className="relative z-10">
        <WakeLines className="h-32 w-full text-gold sm:h-40" stroke="currentColor" />
      </div>
    </section>
  );
}