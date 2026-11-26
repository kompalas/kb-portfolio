import fs from "node:fs";
import path from "node:path";
import {
  type Project,
  type ProjectCitation,
  type ProjectDetailBlock,
  getProjects,
} from "@/resources/projects";

export type ProjectSlide = {
  id: string;
  title: string;
  description: string;
  descriptionEl?: string;
  roleDescription: string;
  roleDescriptionEl?: string;
  details: string;
  detailsEl?: string;
  detailsContent?: { en: ProjectDetailBlock[]; el: ProjectDetailBlock[] };
  citation?: ProjectCitation;
  kind: "Research project" | "Coding project";
  period: string;
  periodEl: string;
  role: string;
  roleEl: string;
  link: string;
  image?: string;
  downloadUrl?: string;
  projectUrl?: string;
  caseStudyUrl?: string;
};

export function getProjectSlides(): ProjectSlide[] {
  return getProjects().map((project: Project): ProjectSlide => {
    const absoluteImage = path.join(process.cwd(), "public", project.image);
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      descriptionEl: project.descriptionEl,
      roleDescription: project.roleDescription,
      roleDescriptionEl: project.roleDescriptionEl,
      kind: project.kind === "research" ? "Research project" : "Coding project",
      period: project.period,
      periodEl: project.periodEl,
      role: project.role,
      roleEl: project.roleEl,
      link: project.link,
      details: project.details,
      detailsEl: project.detailsEl,
      detailsContent: project.detailsContent,
      citation: project.citation,
      downloadUrl: project.downloadUrl,
      image: fs.existsSync(absoluteImage) ? project.image : undefined,
      projectUrl: project.link,
    };
  });
}

export function getProjectSlidesInDisplayOrder(): ProjectSlide[] {
  const projectSlides = getProjectSlides();
  return [
    ...projectSlides.filter((project) => project.kind === "Research project"),
    ...projectSlides.filter((project) => project.kind === "Coding project"),
  ];
}
