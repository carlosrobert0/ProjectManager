import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { UpdateProjectByIdAndUsernameController } from "./UpdateProjectByIdAndUsernameController";
import { UpdateProjectByIdAndUsernameUseCase } from "./UpdateProjectByIdAndUsernameUseCase";

const projectRepository = ProjectsRepository.getInstance()
const updateProjectByIdAndUsername = new UpdateProjectByIdAndUsernameUseCase(projectRepository)
const updateProjectByIdAndController = new UpdateProjectByIdAndUsernameController(updateProjectByIdAndUsername)

export { updateProjectByIdAndController }