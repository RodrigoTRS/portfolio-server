import { PrismaProjectsRepository } from "@/repositories/prisma/prisma-projects-repository";
import { FetchProjectsUseCase } from "../fetch-projects-use-case";

export function makeFetchProjectsUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new FetchProjectsUseCase(projectsRepository);

  return useCase;
}
