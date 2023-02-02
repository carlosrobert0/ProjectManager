import axios from "axios";
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

  async findAllProjectsByUsername(username: string): Promise<any> {
    const projects = await prisma.projects.findMany({
      where: {
        username: username
      }
    })

    return projects
  }

  async findProjectByIdAndUsername(id: string, username: string): Promise<any> {
    const project = await prisma.projects.findFirst({
      where: {
        AND: [
          { id: id },
          { username: username },
        ]
      }
    })

    return project
  }

  async updateProjectByIdAndUsername(id: string, username: string, data: ProjectDTO): Promise<void> {
    const isUserLogged = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (isUserLogged) {
      await prisma.projects.update({
        where: {
          id: id,
        },
        data: data
      })
    } else {
      throw new Error("it is not possible to change this project")
    }
  }

  async doneProjectByIdAndUsername(id: string, username: string): Promise<void> {
    const isUserLogged = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (isUserLogged) {
      await prisma.projects.update({
        where: {
          id: id,
        },
        data: {
          ...isUserLogged,
          done: true
        }
      })
    } else {
      throw new Error("it is not possible to done this project")
    }
  }

  async deleteProjectByIdAndUsername(id: string, username: string): Promise<void> {
    const isUserLogged = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if (isUserLogged) {
      await prisma.projects.delete({
        where: {
          id
        }
      })
    } else {
      throw new Error("it is not possible to delete this project")
    }
  }
}