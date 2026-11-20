import { getProjects, type Project } from "@/resources/projects";
import fs from "node:fs";
import path from "node:path";

export type ProjectSlide = {
  id: string;
  title: string;
  description: string;
  descriptionEl?: string;
  kind: "Research project" | "Coding project";
  period: string;
  role: string;
  link: string;
  details: string;
  image?: string;
  projectUrl?: string;
  caseStudyUrl?: string;
};

export function getProjectSlides(): ProjectSlide[] {
  return getProjects().map((project: Project) => {
    const absoluteImage = path.join(process.cwd(), "public", project.image);
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      kind: project.kind === "research" ? "Research project" : "Coding project",
      period: project.period,
      role: project.role,
      link: project.link,
      details: project.details,
      image: fs.existsSync(absoluteImage) ? project.image : undefined,
      projectUrl: project.link,
    };
  });
}