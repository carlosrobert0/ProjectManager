import { Request, Response } from 'express'
import { CreateProjectUseCase } from './CreateProjectUseCase'

export class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) { }

  async handle(request: Request, response: Response) {
    const {
      title,
      zip_code,
      cost,
      done,
      deadline,
      user_id
    } = request.body

    try {
      const Project = await this.createProjectUseCase.execute({
        title,
        zip_code,
        cost,
        done,
        deadline,
        user_id
      })

      return response.json(Project)
    } catch (error) {
      console.log(error)
    }
  }
}