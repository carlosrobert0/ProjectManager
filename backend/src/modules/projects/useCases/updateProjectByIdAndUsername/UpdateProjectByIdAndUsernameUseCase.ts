import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { ProjectDTO } from "../../repositories/IProjectsRepository";

export class UpdateProjectByIdAndUsernameUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(id: string, username: string, data: ProjectDTO) {
    await this.projectsRepository.updateProjectByIdAndUsername(id, username, data)
  }
}