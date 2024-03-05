import { Prisma } from "@prisma/client";
import { ProjectsRepository } from "../projects-repository";
import { prisma } from "@/lib/prisma";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

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
}
