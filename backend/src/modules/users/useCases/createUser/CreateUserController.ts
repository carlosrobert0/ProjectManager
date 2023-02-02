import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, username, password } = request.body

    try {
      const user = await this.createUserUseCase.execute({
        name,
        username,
        password
      })

      return response.json(user)
    } catch (error) {
      console.log(error)
    }
  }
}