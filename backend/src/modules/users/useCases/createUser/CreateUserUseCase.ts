import { hash } from "bcrypt"
import { UserRepository } from "../../repositories/implementations/UsersRepository"

interface CreateUser {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute({ name, username, password }: CreateUser) {
    const usersExists = await this.usersRepository.findUserExists(username)

    if (usersExists) {
      throw new Error("User already exists")
    }

    const hashPassword = await hash(password, 10)

    const user = await this.usersRepository.create({
      name,
      username,
      password: hashPassword
    })

    return user
  }
}