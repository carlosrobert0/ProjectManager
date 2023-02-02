import { Request, Response } from "express";
import { UpdateProjectByIdAndUsernameUseCase } from "./UpdateProjectByIdAndUsernameUseCase";

export class UpdateProjectByIdAndUsernameController {
  constructor(private updateProjectByIdAndUsernameUseCase: UpdateProjectByIdAndUsernameUseCase) { }

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { username } = request
    const data = request.body

    const dataUpdated = {
      ...data,
      updated_at: new Date()
    }

    try {
      const result = await this.updateProjectByIdAndUsernameUseCase.execute(id, username, dataUpdated)

      return response.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}