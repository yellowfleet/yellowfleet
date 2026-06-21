export type ProjectStatus = "planned" | "pilot" | "active" | "completed";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: ProjectStatus;
  image_url: string;
  created_at?: string;
}
