import { ObjectId } from "mongodb";

export interface Project {
  content: string;
  excerpt: string;
  image: string;
  slug: string;
  tags: string;
  title: string;
  url: string;
  type: string;
}

export interface ProjectProps {
  project: {
    content: string;
    excerpt: string;
    image: string;
    slug: string;
    tags: string;
    title: string;
    url: string;
    type: string;
  };
}

export interface ProjectHeader {
  title: string;
  image: string;
}

export interface PortfolioProps {
  professionalProjects: Project[];
  freelanceProjects: Project[];
  personalProjects: Project[];
}

export interface ContactDetails {
  id?: ObjectId;
  email: string | undefined;
  name: string | undefined;
  message: string | undefined;
}

export interface NotificationProps {
  status: string;
  message: string;
  title: string;
}
