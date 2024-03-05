import { describe, it, beforeEach, expect } from "vitest";
import { InMemoryProjectsRepository } from "@/repositories/in-memory/in-memory-projects-repository";
import { FindProjectByIdUseCase } from "./find-project-by-id-use-case";

let projectRepository: InMemoryProjectsRepository;
let sut: FindProjectByIdUseCase;

describe("Find by id use case:", () => {
  beforeEach(() => {
    projectRepository = new InMemoryProjectsRepository();
    sut = new FindProjectByIdUseCase(projectRepository);
  });

  it("should be able to get a project by its id", async () => {
    const newProject = await projectRepository.create({
      category: "cateogry-01",
      cover_image_url: "http://image.url",
      title: "project-01",
      description: "description",
      technologies: ["tag-01"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    const { project } = await sut.execute({
      id: newProject.id,
    });

    expect(project).toEqual(
      expect.objectContaining({
        title: "project-01",
      })
    );
  });
});
