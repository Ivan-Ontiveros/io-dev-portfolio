import { mockProjects } from "@/services/projectsAPI/mockResponses";

type ProjectDetailsProps = {
  params: {
    id: string;
  };
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { id } = await params;

  const project = mockProjects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </main>
  );
}
