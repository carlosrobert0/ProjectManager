import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository"
import { FindProjectByIdAndUsernameController } from "./FindProjectByIdAndUsernameController"
import { FindProjectByIdAndUsernameUseCase } from "./FindProjectByIdAndUsernameUseCase"

const projectsRepository = ProjectsRepository.getInstance()
const findProjectByIdAndUsernameUseCase = new FindProjectByIdAndUsernameUseCase(projectsRepository)
const findProjectByIdAndUsernameController = new FindProjectByIdAndUsernameController(findProjectByIdAndUsernameUseCase)

export { findProjectByIdAndUsernameController }