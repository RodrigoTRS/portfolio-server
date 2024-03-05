import { describe, it, beforeEach, expect } from "vitest";
import { CreateProjectUseCase } from "./create-project-use-case";
import { InMemoryProjectsRepository } from "@/repositories/in-memory/in-memory-projects-repository";

let projectRepository: InMemoryProjectsRepository;
let sut: CreateProjectUseCase;

describe("Create project use case:", () => {
  beforeEach(() => {
    projectRepository = new InMemoryProjectsRepository();
    sut = new CreateProjectUseCase(projectRepository);
  });

  it.skip("should be able to create a project", async () => {
    const { project } = await sut.execute({
      category: "cateogry-01",
      cover_image = "image",
      title: "project-01",
      description: "description",
      technologies: ["tag-01"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    expect(project).toEqual(
      expect.objectContaining({
        title: "project-01",
      })
    );
  });
});
