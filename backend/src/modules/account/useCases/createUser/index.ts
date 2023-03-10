import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const usersRepository = UsersRepository.getInstance()
const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

export { authenticateUserController }