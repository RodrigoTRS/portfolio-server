import { Language, Prisma } from "@prisma/client";

export interface LanguagesRepository {
  create(data: Prisma.LanguageCreateInput): Promise<Language>;
  findById(id: string): Promise<Language | null>;
  fetchLanguages(): Promise<Language[]>;
  deleteById(id: string): Promise<Language | null>;
}
