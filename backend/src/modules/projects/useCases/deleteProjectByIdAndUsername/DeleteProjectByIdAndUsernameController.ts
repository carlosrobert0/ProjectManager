import { Request, Response } from 'express'
import { DeleteProjectByIdAndUsernameUseCase } from './DeleteProjectByIdAndUsernameUseCase'

export class DeleteProjectByIdAndUsernameController {
  constructor(private deleteProjectByIdAndUsernameUseCase: DeleteProjectByIdAndUsernameUseCase) { }

  async handle(request: Request, response: Response) {
    const { username } = request
    const { id } = request.params
    
    try {
      await this.deleteProjectByIdAndUsernameUseCase.execute(id, username)
    } catch (error) {
      console.log(error)
    }
  }
}