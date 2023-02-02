interface UserDTO {
  name: string
  username: string
  password: string
}

interface IUsersRepository {
  create({
    name, 
    username,
    password
  }: UserDTO): Promise<void>

  findUserExists(username: string): Promise<any>
}

export { UserDTO, IUsersRepository }