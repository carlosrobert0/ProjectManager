import { hash } from "bcrypt"
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"

interface CreateProject {
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  username: string
}

export class CreateProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) { }

  async execute({
    title,
    zip_code,
    cost,
    done,
    deadline,
    username
  }: CreateProject) {
    const project = await this.projectsRepository.create({
      title,
      zip_code,
      cost,
      done,
      deadline,
      username
    })

    return project
  }
}