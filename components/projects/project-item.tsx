import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

import { ProjectProps } from "@/lib/props";
import classes from "./project-item.module.scss";

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const { title, image, excerpt, slug, tags, url } = project;

  const imagePath: string = `/images/projects/${slug}/${image}`;
  const tagArray: Array<string> = tags.split(", ");

  return (
    <li className={classes.projectItem}>
      <div className={classes.imageContainer}>
        <Image src={imagePath} alt={title} fill />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className={classes.tagContainer}>
          {tagArray.map((tag: string) => {
            return <Tag key={tag} tag={tag} />;
          })}
        </div>
        <div className={classes.linkContainer}>
          <Link href={`/projects/${slug}`}>See More</Link>
          <a href={url}>Visit Site</a>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
