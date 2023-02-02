import axios from "axios"
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"

export class FindProjectByIdAndUsernameUseCase {
  constructor(private projectsRepository: ProjectsRepository) { }

  async execute(username: string, id: string) {
    const project = this.projectsRepository.findProjectByIdAndUsername(id, username)

    return project
  }
}