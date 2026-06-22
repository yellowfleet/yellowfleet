import { Metadata } from "next";
import { Project } from "@/types/project";
import { getProjects } from "@/lib/queries/projects";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects | YellowFleet",
  description:
    "Pilot programs, partnerships, and infrastructure initiatives for electric marine mobility.",
};

const statusLabel: Record<Project["status"], string> = {
  planned: "Planned",
  pilot: "Pilot",
  active: "Active",
  completed: "Completed",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHeader
        eyebrow="Projects & Initiatives"
        title="Where electric marine mobility is taking shape"
        description="From coastal tourism pilots to water metro infrastructure — a look at the initiatives we're building toward."
      />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-navy/10 p-6 transition-colors hover:border-gold">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy/50">
                    {statusLabel[project.status]}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mx-auto max-w-md py-16 text-center text-navy/60">
            Project details are being finalized — check back soon.
          </p>
        )}
      </section>
    </>
  );
}
