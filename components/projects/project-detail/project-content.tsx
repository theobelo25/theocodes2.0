import ReactMarkdown from "react-markdown";
import Image from "next/image";
import ProjectHeader from "./project-header";

import { ProjectProps } from "@/lib/props";
import classes from "./project-content.module.scss";

const ProjectContent: React.FC<ProjectProps> = ({ project }) => {
  const { title, slug, image, content } = project;

  const imagePath = `/images/projects/${slug}/${image}`;

  const customRenderers = {};

  return (
    <article className={classes.content}>
      <ProjectHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default ProjectContent;
