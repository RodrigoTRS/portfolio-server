import { LanguagesRepository } from "@/repositories/languages-repository";
import { Language } from "@prisma/client";

interface CreateLanguageUseCaseRequest {
  title: string;
  level: string;
}

interface CreateLanguageUseCaseResponse {
  language: Language;
}

export class CreateLanguageUseCase {
  constructor(private languageRepository: LanguagesRepository) {}

  async execute({
    title,
    level,
  }: CreateLanguageUseCaseRequest): Promise<CreateLanguageUseCaseResponse> {
    const language = await this.languageRepository.create({
      title,
      level,
    });

    return { language };
  }
}
