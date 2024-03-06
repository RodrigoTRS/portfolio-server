import { makeFindProjectByIdUseCase } from "@/use-cases/factories/make-find-project-by-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const getProjectParams = z.object({
    id: z.string(),
  });

  const { id } = getProjectParams.parse(request.params);

  const useCase = makeFindProjectByIdUseCase();

  const project = await useCase.execute({
    id,
  });

  return reply.status(200).send({
    project,
  });
}
