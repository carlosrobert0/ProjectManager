import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

const projectRepository = ProjectsRepository.getInstance()
const createProjectUseCase = new CreateProjectUseCase(projectRepository)
const createProjectController = new CreateProjectController(createProjectUseCase)

export { createProjectController }