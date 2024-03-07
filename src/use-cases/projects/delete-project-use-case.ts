import { ProjectsRepository } from "@/repositories/projects-repository";
import { Project } from "@prisma/client";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";

interface DeleteProjectUseCaseRequest {
  id: string;
}

interface DeleteProjectUseCaseResponse {
  project: Project;
}

export class DeleteProjectUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute({
    id,
  }: DeleteProjectUseCaseRequest): Promise<DeleteProjectUseCaseResponse> {
    const project = await this.projectRepository.deleteById(id);

    if (!project) {
      throw new ResourceNotFoundError();
    }

    return { project };
  }
}
