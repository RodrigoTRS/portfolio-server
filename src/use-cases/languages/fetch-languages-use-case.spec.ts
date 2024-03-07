import { describe, it, beforeEach, expect } from "vitest";
import { InMemoryLanguagesRepository } from "@/repositories/in-memory/in-memory-languages-repository";
import { FetchLanguagesUseCase } from "./fetch-languages-use-case";

let languageRepository: InMemoryLanguagesRepository;
let sut: FetchLanguagesUseCase;

describe("Create language use case:", () => {
  beforeEach(() => {
    languageRepository = new InMemoryLanguagesRepository();
    sut = new FetchLanguagesUseCase(languageRepository);
  });

  it("should be able to create a language", async () => {
    await languageRepository.create({
      title: "language-01",
      level: "level-01",
    });

    await languageRepository.create({
      title: "language-02",
      level: "level-02",
    });

    const { languages } = await sut.execute();

    expect(languages).toEqual([
      expect.objectContaining({
        title: "language-01",
      }),
      expect.objectContaining({
        title: "language-02",
      }),
    ]);
  });
});
