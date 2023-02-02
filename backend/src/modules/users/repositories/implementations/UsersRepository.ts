import { prisma } from "../../../../database/prismaClient";
import { IUsersRepository, UserDTO } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
  }

  async create({ name, username, password }: UserDTO): Promise<any> {
    const user = await prisma.users.create({
      data: {
        name,
        username,
        password
      },
      select: {
        id: true,
        name: true,
        username: true,
        created_at: true,
        updated_at: true
      }
    })

    return user
  }

  async findUserExists(username: string): Promise<any> {
    const user = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    return user
  }
}