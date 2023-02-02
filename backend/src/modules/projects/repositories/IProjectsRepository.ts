interface ProjectDTO {
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  username?: string
}

interface IProjectsRepository {
  create({
    title,
    zip_code,
    cost,
    done,
    deadline,
    username
  }: ProjectDTO): Promise<void>

  findAllProjectsByUsername(username: string): Promise<any>

  findProjectByIdAndUsername(id: string, username: string): Promise<any>

  updateProjectByIdAndUsername(id: string, username: string, data: ProjectDTO): Promise<void>

  doneProjectByIdAndUsername(id: string, username: string): Promise<void>

  deleteProjectByIdAndUsername(id: string, username: string): Promise<void>
}

export { ProjectDTO, IProjectsRepository }