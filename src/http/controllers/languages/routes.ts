import { FastifyInstance } from "fastify";
import { create } from "./create-language";
import { fetchLanguages } from "./fetch-languages";

export async function languagesRouter(app: FastifyInstance) {
  app.get("/languages", fetchLanguages);
  app.post("/languages", create);
}
