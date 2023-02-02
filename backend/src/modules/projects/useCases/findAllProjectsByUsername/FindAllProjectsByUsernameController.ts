import { Request, Response } from 'express'
import { FindAllProjectsByUsernameUseCase } from './FindAllProjectsByUsernameUseCase'

export class FindAllProjectsByUsernameController {
  constructor(private FindAllProjectsByUsernameUseCase: FindAllProjectsByUsernameUseCase) { }

  async handle(request: Request, response: Response) {
    const { username } = request
    
    try {
      const projects = await this.FindAllProjectsByUsernameUseCase.execute(username)

      return response.json(projects)
    } catch (error) {
      console.log(error)
    }
  }
}