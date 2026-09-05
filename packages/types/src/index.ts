export type User = {
  id: string;
  email: string;
  displayName?: string;
};

export type Site = {
  id: string;
  name: string;
  slug: string;
  status: "draft" | "published";
};

export type ProjectStatus = "planned" | "active" | "ready" | "archived";

export interface Project {
  id: string;
  name: string;
  slug: string;
  status: ProjectStatus;
  createdAt: string;
}
