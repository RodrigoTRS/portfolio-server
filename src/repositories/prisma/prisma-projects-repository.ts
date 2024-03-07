import { Prisma } from "@prisma/client";
import { ProjectsRepository } from "../projects-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProjectsRepository implements ProjectsRepository {
  async create(data: Prisma.ProjectCreateInput) {
    const project = await prisma.project.create({
      data,
    });

    return project;
  }

  async findById(id: string) {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
    });

    return project;
  }

  async fetchProjects() {
    const projects = await prisma.project.findMany();
    return projects;
  }

  async deleteById(id: string) {
    const project = await prisma.project.delete({
      where: {
        id,
      },
    });

    return project;
  }
}
