import React from "react";
import styles from "./ProjectListCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HyperlinkButton } from "@/components/base/buttons/HyperlinkButton";
import { ProjectListItem } from "@/services/projectsAPI/dataTypes";
import { Tile } from "@/components/base/containers/Tile";

export type ProjectListCardProps = {
  project: ProjectListItem;
};

export const ProjectListCard = ({ project }: ProjectListCardProps) => {
  const { id, title, subtitle, description, techStack, thumbnail, links } =
    project;

  return (
    <Tile className={styles["project-card"]}>
      {techStack && (
        <span className="text-gray-400">
          {techStack.map((entry, index) => (
            <span key={index}>
              {entry}
              {index < techStack.length - 1 && " | "}
            </span>
          ))}
        </span>
      )}

      <h3>{title}</h3>
      {subtitle && <h4 className="text-gray-500">{subtitle}</h4>}
      <p>{description.split(".")[0]}.</p>

      <div
        className={styles["project-image-container"]}
        style={{ position: "relative", width: "100%", paddingBottom: "50%" }}
      >
        <Link href={`/projects/${id}`}>
          <Image
            src={thumbnail || "/default-image.png"}
            alt={title}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 500px"
            style={{ aspectRatio: "3 / 4" }}
          />
        </Link>
      </div>

      <div className={styles["btn-group"]}>
        {links.liveDemo && (
          <HyperlinkButton url={links.liveDemo} label="View Demo" />
        )}
        {links.sourceCode && (
          <HyperlinkButton url={links.sourceCode} label="View Repo" />
        )}
        {/* <HyperlinkButton url={`/projects/${id}`} label="View Details" /> */}
      </div>
    </Tile>
  );
};
