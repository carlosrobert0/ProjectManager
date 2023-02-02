interface ProjectDTO {
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  user_id: string
}

interface IProjectsRepository {
  create({
    title,
    zip_code,
    cost,
    done,
    deadline,
    user_id
  }: ProjectDTO): Promise<void>
}

export { ProjectDTO, IProjectsRepository }