import Head from "next/head";
import SecondaryHero from "@/components/layout/secondary-hero";
import ProjectList from "@/components/projects/project-list";
import { getAllProjects } from "@/lib/projects-util";
import { GetStaticProps } from "next";

import { PortfolioProps, Project } from "@/lib/props";

const Portfolio: React.FC<PortfolioProps> = ({
  professionalProjects,
  freelanceProjects,
  personalProjects,
}) => {
  return (
    <>
      <Head>
        <title>TheoCodes.dev - Portfolio</title>
        <meta
          name="description"
          content="A collection of professional, freelance and personal projects that I've worked on."
        />
      </Head>
      <SecondaryHero
        title="Portfolio"
        description="A collection of professional, freelance and personal projects that I've worked on."
      />
      {professionalProjects && (
        <ProjectList type="professional" projects={professionalProjects} />
      )}
      {freelanceProjects.length > 0 && (
        <ProjectList type="freelance" projects={freelanceProjects} />
      )}
      {personalProjects.length > 0 && (
        <ProjectList type="professional" projects={personalProjects} />
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allProjects = getAllProjects() as Project[];

  function getFilteredProjects(type: string) {
    const filteredProjects = allProjects.filter(
      (project) => project.type === type
    );

    return filteredProjects;
  }

  const professionalProjects = getFilteredProjects("professional");
  const freelanceProjects = getFilteredProjects("freelance");
  const personalProjects = getFilteredProjects("personal");

  return {
    props: {
      professionalProjects,
      freelanceProjects,
      personalProjects,
    },
    revalidate: 1800,
  };
};

export default Portfolio;
