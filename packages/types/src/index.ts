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
