import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"

export class DeleteProjectByIdAndUsernameUseCase {
  constructor(private projectsRepository: ProjectsRepository) { }

  async execute(id: string, username: string) {
    const project = await this.projectsRepository.deleteProjectByIdAndUsername(id, username)

    return project
  }
}