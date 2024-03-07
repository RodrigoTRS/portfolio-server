import { FastifyInstance } from "fastify";
import { fetchProjects } from "../projects/fetch-projects";
import { create } from "./create-language";

export async function languagesRouter(app: FastifyInstance) {
  app.get("/languages", fetchProjects);
  app.post("/languages", create);
}
