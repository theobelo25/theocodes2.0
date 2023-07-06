import Image from "next/image";

import { ProjectHeader } from "@/lib/props";
import classes from "./project-header.module.scss";

const ProjectHeader: React.FC<ProjectHeader> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.imageContainer}>
        <Image src={image} alt={title} fill />
      </div>
    </header>
  );
};

export default ProjectHeader;
