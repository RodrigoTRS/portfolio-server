import { makeDeleteProjectUseCase } from "@/use-cases/projects/factories/make-delete-project-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteById(request: FastifyRequest, reply: FastifyReply) {
  const getProjectParams = z.object({
    id: z.string(),
  });

  const { id } = getProjectParams.parse(request.params);

  const useCase = makeDeleteProjectUseCase();

  await useCase.execute({
    id,
  });

  return reply.status(204).send();
}
