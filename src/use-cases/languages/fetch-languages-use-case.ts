import { LanguagesRepository } from "@/repositories/languages-repository";
import { Language } from "@prisma/client";

interface FetchLanguagesUseCaseResponse {
  languages: Language[];
}

export class FetchLanguagesUseCase {
  constructor(private languageRepository: LanguagesRepository) {}

  async execute(): Promise<FetchLanguagesUseCaseResponse> {
    const languages = await this.languageRepository.fetchLanguages();

    return { languages };
  }
}
