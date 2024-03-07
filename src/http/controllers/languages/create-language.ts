import { makeCreateLanguageUseCase } from "@/use-cases/languages/factories/make-create-language-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createLanguageBodySchema = z.object({
    title: z.string(),
    level: z.string(),
  });

  const { title, level } = createLanguageBodySchema.parse(request.body);

  const useCase = makeCreateLanguageUseCase();

  useCase.execute({
    title,
    level,
  });

  return reply.status(201).send();
}
