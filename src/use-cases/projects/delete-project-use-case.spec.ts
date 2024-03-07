import { describe, it, beforeEach, expect } from "vitest";
import { InMemoryProjectsRepository } from "@/repositories/in-memory/in-memory-projects-repository";
import { DeleteProjectUseCase } from "./delete-project-use-case";

let projectRepository: InMemoryProjectsRepository;
let sut: DeleteProjectUseCase;

describe("Delete project use case:", () => {
  beforeEach(() => {
    projectRepository = new InMemoryProjectsRepository();
    sut = new DeleteProjectUseCase(projectRepository);
  });

  it("should be able to delete a project", async () => {
    await projectRepository.create({
      category: "category-01",
      title: "project-01",
      description: "description",
      technologies: ["tag-01"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    const projectToBeDeleted = await projectRepository.create({
      category: "category-02",
      title: "project-02",
      description: "description",
      technologies: ["tag-02"],
      project_url: "http://localhost:3333",
      repository_url: "http://localhost:3333",
    });

    const projectsBeforeDeletion = await projectRepository.fetchProjects();

    await sut.execute({ id: projectToBeDeleted.id });

    const projectsAfterDeletion = await projectRepository.fetchProjects();

    expect(projectsBeforeDeletion).toHaveLength(2);
    expect(projectsAfterDeletion).toHaveLength(1);
    expect(projectsAfterDeletion).toEqual([
      expect.objectContaining({
        category: "category-01",
      }),
    ]);
  });
});
