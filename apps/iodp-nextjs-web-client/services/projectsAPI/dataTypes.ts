export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  role: string;
  duration: string;
  status: "Completed" | "Ongoing" | "Archived";
  impact: string;
  responsibilities: string[];
  techStack: string[];
  challenges: string[];
  links: {
    liveDemo?: string;
    sourceCode?: string;
    caseStudy?: string;
  };
  images?: {
    thumbnail: string;
    gallery?: string[];
  };
  metadata?: {
    version?: string;
    releaseDate?: string;
    collaborators?: string[];
  };
};

export type ProjectListItem = Omit<
  Project,
  "responsibilities" | "challenges" | "images" | "metadata"
> & {
  description: string;
  techStack: string[];
  thumbnail: string;
};
