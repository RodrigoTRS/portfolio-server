import { Prisma } from "@prisma/client";
import { LanguagesRepository } from "../languages-repository";
import { prisma } from "@/lib/prisma";

export class PrismaLanguagesRepository implements LanguagesRepository {
  async create(data: Prisma.LanguageCreateInput) {
    const language = await prisma.language.create({
      data,
    });

    return language;
  }

  async findById(id: string) {
    const language = await prisma.language.findUnique({
      where: {
        id,
      },
    });

    return language;
  }

  async fetchLanguages() {
    const languages = await prisma.language.findMany();
    return languages;
  }

  async deleteById(id: string) {
    const language = await prisma.language.delete({
      where: {
        id,
      },
    });

    return language;
  }
}
