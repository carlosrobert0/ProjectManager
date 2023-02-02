import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository"

interface AuthenticateUser {
  username: string
  password: string
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ username, password }: AuthenticateUser) {
    const usersExists = await this.usersRepository.findUserExists(username)

    if (!usersExists) {
      throw new Error("Login ou senha inválidos!")
    }

    const passwordMatch = await compare(password, usersExists.password)

    if (!passwordMatch) {
      throw new Error("login ou senha inválidos")
    }

    const token = sign({username}, "03d810e18c3bc6218e3a8afaf5b58c16", {
      subject: usersExists.username,
      expiresIn: "1d"
    })

    return token
  }
}