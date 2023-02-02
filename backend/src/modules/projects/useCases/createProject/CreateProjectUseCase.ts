import { hash } from "bcrypt"
import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"

interface CreateProject {
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  user_id: string
}

export class CreateProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) { }

  async execute({
    title,
    zip_code,
    cost,
    done,
    deadline,
    user_id
  }: CreateProject) {
    const project = await this.projectsRepository.create({
      title,
      zip_code,
      cost,
      done,
      deadline,
      user_id
    })

    return project
  }
}