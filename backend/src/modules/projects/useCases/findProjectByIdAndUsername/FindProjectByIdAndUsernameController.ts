import { Request, Response } from 'express'
import { FindProjectByIdAndUsernameUseCase } from './FindProjectByIdAndUsernameUseCase'

export class FindProjectByIdAndUsernameController {
  constructor(private findProjectByIdAndUsernameUseCase: FindProjectByIdAndUsernameUseCase) { }

  async handle(request: Request, response: Response) {
    const { username } = request
    const { id } = request.params
    
    try {
      const project = await this.findProjectByIdAndUsernameUseCase.execute(username, id)

      return response.json(project)
    } catch (error) {
      console.log(error)
    }
  }
}