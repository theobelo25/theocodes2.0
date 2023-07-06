import ProjectItem from "./project-item";

import { ProjectProps, Project } from "@/lib/props";
import classes from "./project-list.module.scss";

interface ProjectsProps {
  type: string;
  projects: Project[];
}

const ProjectList: React.FC<ProjectsProps> = ({ type, projects }) => {
  return (
    <section
      className={classes.professionalProjectList}
      aria-labelledby="project-list-title"
    >
      <h2 id="project-list-title">Project List</h2>
      <ul>
        {projects.map((project) => {
          return <ProjectItem key={project.slug} project={project} />;
        })}
      </ul>
    </section>
  );
};

export default ProjectList;
