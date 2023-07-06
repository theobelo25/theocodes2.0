import Head from "next/head";
import ProjectList from "@/components/projects/project-list";
import { getAllProjects } from "@/lib/projects-util";
import { GetStaticProps } from "next";

import { ProjectProps } from "@/lib/props";

interface ProjectsProps {
  projects: ProjectProps[];
}

const AllProjectsPage: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>TheoCodes.dev - All Projects</title>
        <meta name="description" content="A collection of all my projects." />
      </Head>
      <ProjectList type="professional" projects={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
    revalidate: 1800,
  };
};

export default AllProjectsPage;
