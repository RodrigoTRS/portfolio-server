import { describe, it, beforeEach, expect } from "vitest";
import { InMemoryProjectsRepository } from "@/repositories/in-memory/in-memory-projects-repository";
import { FetchProjectsUseCase } from "./fetch-projects-use-case";

let projectRepository: InMemoryProjectsRepository;
let sut: FetchProjectsUseCase;

describe("Create project use case:", () => {
  beforeEach(() => {
    projectRepository = new InMemoryProjectsRepository();
    sut = new FetchProjectsUseCase(projectRepository);
  });

  it("should be able to create a project", async () => {
    await projectRepository.create({
      category: "category-01",
      title: "project-01",
      description: "description",
      technologies: ["tag-01"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    await projectRepository.create({
      category: "category-02",
      title: "project-02",
      description: "description",
      technologies: ["tag-01"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    const { projects } = await sut.execute();

    expect(projects).toEqual([
      expect.objectContaining({
        title: "project-01",
      }),
      expect.objectContaining({
        title: "project-02",
      }),
    ]);
  });
});
