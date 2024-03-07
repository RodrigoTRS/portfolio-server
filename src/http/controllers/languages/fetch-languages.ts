import { makeFetchLanguagesUseCase } from "@/use-cases/languages/factories/make-fetch-languages-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchLanguages(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const useCase = makeFetchLanguagesUseCase();

  const languages = await useCase.execute();

  return reply.status(201).send(languages);
}
