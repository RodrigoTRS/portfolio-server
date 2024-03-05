import { Prisma, Project } from "@prisma/client";
import { ProjectsRepository } from "../projects-repository";
import { randomUUID } from "crypto";

export class InMemoryProjectsRepository implements ProjectsRepository {
  items: Project[] = [];

  async create(data: Prisma.ProjectCreateInput) {
    const newProject: Project = {
      id: randomUUID(),
      // cover_image_url: data.cover_image_url,
      title: data.title,
      description: data.description,
      category: data.category,
      technologies: Array(String(data.technologies)),
      created_at: new Date(),
      project_url: data.project_url,
      repository_url: data.repository_url,
    };

    await this.items.push(newProject);

    return newProject;
  }

  async findById(id: string) {
    const project = this.items.find((item) => item.id === id);

    if (!project) {
      return null;
    }

    return project;
  }
}
