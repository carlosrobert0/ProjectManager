import { Request, Response } from 'express'
import { DoneProjectByIdAndUsernameUseCase } from './DoneProjectByIdAndUsernameUseCase'

export class DoneProjectByIdAndUsernameController {
  constructor(private doneProjectByIdAndUsernameUseCase: DoneProjectByIdAndUsernameUseCase) { }

  async handle(request: Request, response: Response) {
    const { username } = request
    const { id } = request.params

    try {
      await this.doneProjectByIdAndUsernameUseCase.execute(id, username)
    } catch (error) {
      console.log(error)
    }
  }
}