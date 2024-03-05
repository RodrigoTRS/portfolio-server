import { ProjectsRepository } from "@/repositories/projects-repository";
import { Project } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface FindProjectByIdUseCaseRequest {
  id: string;
}

interface FindProjectByIdUseCaseResponse {
  project: Project;
}

export class FindProjectByIdUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute({
    id,
  }: FindProjectByIdUseCaseRequest): Promise<FindProjectByIdUseCaseResponse> {
    const project = await this.projectRepository.findById(id);

    if (!project) {
      throw new ResourceNotFoundError();
    }

    return { project };
  }
}
