import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { DoneProjectByIdAndUsernameController } from "./DoneProjectByIdAndUsernameController";
import { DoneProjectByIdAndUsernameUseCase } from "./DoneProjectByIdAndUsernameUseCase";

const projectRepository = ProjectsRepository.getInstance()
const doneProjectByIdAndUsernameUseCase = new DoneProjectByIdAndUsernameUseCase(projectRepository)
const doneProjectByIdAndUsernameController = new DoneProjectByIdAndUsernameController(doneProjectByIdAndUsernameUseCase)

export { doneProjectByIdAndUsernameController }