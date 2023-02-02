import { Request, Response } from 'express'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) { }

  async handle(request: Request, response: Response) {
    const { username } = request

    const {
      title,
      zip_code,
      cost,
      done,
      deadline,
    } = request.body

    try {
      const Project = await this.createProjectUseCase.execute({
        title,
        zip_code,
        cost,
        done,
        deadline,
        username
      })

      return response.json(Project)
    } catch (error) {
      console.log(error)
    }
  }
}