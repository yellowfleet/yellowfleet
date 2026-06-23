import { companyInfo } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { WakeLines } from "@/components/ui/WakeLines";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-navy text-white flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 z-1">
  {/* Desktop image */}
  <img
    src="/images/hero-bg.png"
    alt=""
    className="hidden h-full w-full object-cover object-center sm:block"
  />
  {/* Mobile image */}
  <img
    src="/images/hero-bg-mobile.png"
    alt=""
    className="block h-full w-full object-cover object-center sm:hidden"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent sm:from-navy/70 sm:via-navy/20" />
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
</div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-28 sm:py-36 lg:px-0 lg:pl-10">
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
    </section>
  );
}