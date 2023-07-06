import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { getProjectFiles, getProjectData } from "@/lib/projects-util";
import ProjectContent from "@/components/projects/project-detail/project-content";

import { ProjectProps } from "@/lib/props";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ProjectDetailPage: React.FC<ProjectProps> = ({ project }) => {
  const { title, image, excerpt, slug, tags, url } = project;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <ProjectContent project={project} />
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { slug } = context.params as Params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const projectFilenames = getProjectFiles();

  const slugs = projectFilenames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default ProjectDetailPage;
