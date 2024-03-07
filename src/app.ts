import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { projectsRouter } from "./http/controllers/projects/routes";
import cors from "@fastify/cors";
import { languagesRouter } from "./http/controllers/languages/routes";

export const app = fastify();

app.register(projectsRouter);
app.register(languagesRouter);
app.register(cors, {
  origin: true,
  credentials: true,
});

app.get("/health-check", (request: FastifyRequest, reply: FastifyReply) => {
  reply.status(201).send({ message: "ok" });
});
