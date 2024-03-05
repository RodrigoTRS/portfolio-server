import { makeCreateProjectUseCase } from "@/use-cases/factories/make-create-project-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createProjectBodySchema = z.object({
    category: z.string(),
    cover_image: z.instanceof(File),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    repository_url: z.string(),
    project_url: z.string(),
  });

  const {
    category,
    cover_image,
    title,
    description,
    technologies,
    repository_url,
    project_url,
  } = createProjectBodySchema.parse(request.body);

  const useCase = makeCreateProjectUseCase();

  useCase.execute({
    category,
    cover_image,
    title,
    description,
    technologies,
    repository_url,
    project_url,
  });

  return reply.status(201).send();
}
