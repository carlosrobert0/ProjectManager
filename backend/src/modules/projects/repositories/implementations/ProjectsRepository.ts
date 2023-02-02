import { prisma } from "../../../../database/prismaClient";
import { IProjectsRepository, ProjectDTO } from "../IProjectsRepository";

export class ProjectsRepository implements IProjectsRepository {
  private static INSTANCE: any

  public static getInstance(): any {
    if (!ProjectsRepository.INSTANCE) {
      ProjectsRepository.INSTANCE = new ProjectsRepository()
    }

    return ProjectsRepository.INSTANCE
  }

  async create({
    title,
    zip_code,
    cost,
    deadline,
    done,
    username
  }: ProjectDTO): Promise<any> {
    const project = await prisma.projects.create({
      data: {
        title,
        zip_code,
        cost,
        deadline,
        done,
        username
      }
    })

    return project
  }
}