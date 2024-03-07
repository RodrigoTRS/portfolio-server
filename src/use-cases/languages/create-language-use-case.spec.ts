import { describe, it, beforeEach, expect } from "vitest";
import { CreateLanguageUseCase } from "./create-language-use-case";
import { InMemoryLanguagesRepository } from "@/repositories/in-memory/in-memory-languages-repository";

let languageRepository: InMemoryLanguagesRepository;
let sut: CreateLanguageUseCase;

describe("Create language use case:", () => {
  beforeEach(() => {
    languageRepository = new InMemoryLanguagesRepository();
    sut = new CreateLanguageUseCase(languageRepository);
  });

  it("should be able to create a language", async () => {
    const { language } = await sut.execute({
      title: "language-01",
      level: "level-01",
    });

    expect(language).toEqual(
      expect.objectContaining({
        title: "language-01",
      })
    );
  });
});
