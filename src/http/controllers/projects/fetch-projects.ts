import { makeFetchProjectsUseCase } from "@/use-cases/factories/make-fetch-projects-use-cast";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetchProjects(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const useCase = makeFetchProjectsUseCase();

  const projects = await useCase.execute();

  return reply.status(201).send(projects);
}
