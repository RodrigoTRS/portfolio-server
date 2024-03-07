import { PrismaLanguagesRepository } from "@/repositories/prisma/prisma-languages-repository";
import { CreateLanguageUseCase } from "../create-language-use-case";

export function makeCreateLanguageUseCase() {
  const languagesRepository = new PrismaLanguagesRepository();
  const useCase = new CreateLanguageUseCase(languagesRepository);

  return useCase;
}
