import { env } from "@/env";
import { ProjectsRepository } from "@/repositories/projects-repository";
import { uploadToS3 } from "@/utils/upload-to-s3";
import { Project } from "@prisma/client";

interface CreateProjectUseCaseRequest {
  category: string;
  cover_image: File;
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
    cover_image,
    title,
    description,
    technologies,
    repository_url,
    project_url,
  }: CreateProjectUseCaseRequest): Promise<CreateProjectUseCaseResponse> {
    const filename = `/projects/${title.replace("", "-").toLowerCase()}`;
    const url = env.AWS_S3_BASE_URL + filename;

    await uploadToS3({
      name: filename,
      content: cover_image,
    });

    const project = await this.projectRepository.create({
      category,
      cover_image_url: url,
      title,
      description,
      technologies,
      repository_url,
      project_url,
    });

    return { project };
  }
}
