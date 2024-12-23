import Link from "next/link";

export default function Home() {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    // Add more projects here
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <span>{project.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
