import { ProjectsRepository } from "@/repositories/projects-repository";
import { Project } from "@prisma/client";

interface CreateProjectUseCaseRequest {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  repository_url: string;
  project_url: string;
}

interface CreateProjectUseCaseResponse {
  project: Project;
}

export class CreateProjectUseCase {
  constructor(private projectRepository: ProjectsRepository) {}

  async execute({
    category,
    title,
    description,
    technologies,
    repository_url,
    project_url,
  }: CreateProjectUseCaseRequest): Promise<CreateProjectUseCaseResponse> {
    const project = await this.projectRepository.create({
      category,
      title,
      description,
      technologies,
      repository_url,
      project_url,
    });

    return { project };
  }
}
