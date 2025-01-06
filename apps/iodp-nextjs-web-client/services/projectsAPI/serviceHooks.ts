import { Project, ProjectListItem } from "./dataTypes";

export const useProjectListData = (projects: Project[]): ProjectListItem[] => {
  return projects.map((project) => ({
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    description: project.description.split(".")[0], // First sentence for teaser
    role: project.role,
    duration: project.duration,
    impact: project.impact,
    techStack: project.techStack.slice(0, 3), // Limit to top 3
    thumbnail: project.images?.thumbnail || "/default-image.png",
    status: project.status,
    links: project.links,
  }));
};

export const useProjectDetailsData = (
  projects: Project[],
  projectId: string
): Project | undefined => {
  return projects.find((project) => project.id === projectId);
};
