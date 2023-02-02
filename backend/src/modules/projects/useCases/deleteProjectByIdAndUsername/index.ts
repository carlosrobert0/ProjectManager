import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { DeleteProjectByIdAndUsernameController } from "./DeleteProjectByIdAndUsernameController";
import { DeleteProjectByIdAndUsernameUseCase } from "./DeleteProjectByIdAndUsernameUseCase";

const projectRepository = ProjectsRepository.getInstance()
const deleteProjectByIdAndUsernameUseCase = new DeleteProjectByIdAndUsernameUseCase(projectRepository)
const deleteProjectByIdAndUsernameController = new DeleteProjectByIdAndUsernameController(deleteProjectByIdAndUsernameUseCase)

export { deleteProjectByIdAndUsernameController }