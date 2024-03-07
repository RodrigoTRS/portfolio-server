import { PrismaProjectsRepository } from "@/repositories/prisma/prisma-projects-repository";
import { FindProjectByIdUseCase } from "../find-project-by-id-use-case";

export function makeFindProjectByIdUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new FindProjectByIdUseCase(projectsRepository);

  return useCase;
}
