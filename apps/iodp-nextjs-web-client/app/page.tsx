import Link from "next/link";
import { Tile, WebPage } from "@/components/base";
import { mockProjects } from "@/services/projectsAPI/mockResponses";
import { useProjectListData } from "@/services/projectsAPI/serviceHooks";
import { ProjectListCard } from "./projects/components/ProjectListCard";
import styles from "./index.module.scss";

export default function Home() {
  const projectListData = useProjectListData(mockProjects);

  const links = [
    { href: "https://github.com/Ivan-Ontiveros", label: "GitHub" },
    { href: "https://www.linkedin.com/in/ivan-ontiveros/", label: "LinkedIn" },
    { href: "https://www.ivanontiveros.com/", label: "My Blog" },
  ];

  return (
    <WebPage className={styles.homePage} title="Welcome to My Portfolio">
      <section className={styles.introductionSection}>
        <Tile>
          <h2>Professional Summary</h2>
          <p>
            {`As a Software Developer specializing in ReactJS, modernizing
            workflows, and delivering scalable, user-focused solutions. I've led
            feature development, influenced API integration strategies,
            transitioned legacy systems to modern architectures, and streamlined
            release processes by moving repositories to CircleCI. My approach
            emphasizes collaboration, practical problem-solving, and building
            reliable software. Explore my projects to learn more about my work.`}
          </p>
        </Tile>

        <Tile>
          <h2>Quick Access</h2>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>{link.label}:</strong> {link.href}
                </Link>
              </li>
            ))}
          </ul>
        </Tile>
      </section>
      <section>
        <h2>Projects</h2>
        <ul className={styles["projects-list"]}>
          {projectListData.map((project) => (
            <li key={project.id}>
              <ProjectListCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </WebPage>
  );
}
