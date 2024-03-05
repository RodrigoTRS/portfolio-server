import { FastifyInstance } from "fastify";
import { findById } from "./find-project-by-id";
import { create } from "./create-project";

export async function projectsRouter(app: FastifyInstance) {
  app.get("/projects/:id", findById);
  app.post("/projects", create);
}
