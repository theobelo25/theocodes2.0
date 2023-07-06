import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectDirectory = path.join(process.cwd(), "projects");

export function getProjectData(projectIdentifier: String) {
  const projectSlug = projectIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: projectSlug,
    ...data,
    content,
  };

  return postData;
}

export function getProjectFiles() {
  return fs.readdirSync(projectDirectory);
}

export function getAllProjects() {
  const projectFiles = getProjectFiles();

  const allProjects = projectFiles.map((project) => {
    return getProjectData(project);
  });

  return allProjects;
}

export function getFilteredProjects(type: string) {
  const allProjects = getAllProjects();

  const professionalProjects = allProjects.filter(
    (project) => project.slug === type
  );

  return professionalProjects;
}
