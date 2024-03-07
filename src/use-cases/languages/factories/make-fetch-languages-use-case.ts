import { PrismaLanguagesRepository } from "@/repositories/prisma/prisma-languages-repository";
import { FetchLanguagesUseCase } from "../fetch-languages-use-case";

export function makeFetchLanguagesUseCase() {
  const languagesRepository = new PrismaLanguagesRepository();
  const useCase = new FetchLanguagesUseCase(languagesRepository);

  return useCase;
}
