import { Prisma, Language } from "@prisma/client";
import { LanguagesRepository } from "../languages-repository";
import { randomUUID } from "crypto";

export class InMemoryLanguagesRepository implements LanguagesRepository {
  items: Language[] = [];

  async create(data: Prisma.LanguageCreateInput) {
    const newLanguage: Language = {
      id: randomUUID(),
      title: data.title,
      level: data.level,
    };

    await this.items.push(newLanguage);

    return newLanguage;
  }

  async findById(id: string) {
    const language = this.items.find((item) => item.id === id);

    if (!language) {
      return null;
    }

    return language;
  }

  async fetchLanguages() {
    return this.items;
  }

  async deleteById(id: string) {
    const language = this.items.find((item) => item.id === id);

    if (!language) {
      return null;
    }

    this.items = this.items.filter((item) => item.id !== id);

    return language;
  }
}
