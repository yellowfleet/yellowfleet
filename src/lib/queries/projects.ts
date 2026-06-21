import { Project } from "@/types/project";
import { placeholderProjects } from "@/content/projects";

/**
 * Returns all projects.
 * Currently backed by placeholder content. In Phase 2, swap the body of
 * this function for a Supabase query against the `projects` table —
 * components consuming this function do not need to change.
 */
export async function getProjects(): Promise<Project[]> {
  return placeholderProjects;
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  return placeholderProjects.find((project) => project.slug === slug);
}
