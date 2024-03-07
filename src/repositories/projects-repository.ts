import { Project, Prisma } from "@prisma/client";

export interface ProjectsRepository {
  create(data: Prisma.ProjectCreateInput): Promise<Project>;
  findById(id: string): Promise<Project | null>;
  fetchProjects(): Promise<Project[]>;
  deleteById(id: string): Promise<Project | null>;
}
