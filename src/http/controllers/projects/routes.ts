import { FastifyInstance } from "fastify";
import { findById } from "./find-project-by-id";
import { create } from "./create-project";
import { fetchProjects } from "./fetch-projects";
import { deleteById } from "./delete-project";

export async function projectsRouter(app: FastifyInstance) {
  app.get("/projects", fetchProjects);
  app.get("/projects/:id", findById);
  app.post("/projects", create);
  app.delete("/projects/:id", deleteById);
}
