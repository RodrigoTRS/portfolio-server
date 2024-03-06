import { ProjectsRepository } from "@/repositories/projects-repository";
import { Project } from "@prisma/client";

interface FetchProjectsUseCaseResponse {
  projects: Project[];
}

export class FetchProjectsUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute(): Promise<FetchProjectsUseCaseResponse> {
    const projects = await this.projectRepository.fetchProjects();

    return { projects };
  }
}
