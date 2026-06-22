import { Project } from "@/types/project";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const statusLabel: Record<Project["status"], string> = {
  planned: "Planned",
  pilot: "Pilot",
  active: "Active",
  completed: "Completed",
};

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel tone="navy">Projects &amp; initiatives</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold text-navy sm:text-4xl">
            Pilot programs, partnerships, and infrastructure in motion
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.08 * (i + 1)}>
              <div className="group h-full rounded-2xl border border-navy/10 p-6 transition-colors hover:border-gold">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    {statusLabel[project.status]}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
