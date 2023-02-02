import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"

export class FindAllProjectsByUsernameUseCase {
  constructor(private projectsRepository: ProjectsRepository) { }

  async execute(username: string) {
    const projects = this.projectsRepository.findAllProjectsByUsername(username)

    return projects
  }
}