interface ProjectDTO {
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  username: string
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
}

export { ProjectDTO, IProjectsRepository }