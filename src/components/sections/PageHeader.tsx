import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-navy px-6 pt-20 pb-16 text-white sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-4 text-white/70">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}