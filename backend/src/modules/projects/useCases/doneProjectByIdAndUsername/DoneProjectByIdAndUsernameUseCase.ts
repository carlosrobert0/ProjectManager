import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { ProjectDTO } from "../../repositories/IProjectsRepository";

export class DoneProjectByIdAndUsernameUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(id: string, username: string) {
    await this.projectsRepository.doneProjectByIdAndUsername(id, username)
  }
}