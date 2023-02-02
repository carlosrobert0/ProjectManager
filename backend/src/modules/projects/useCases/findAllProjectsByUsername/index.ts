import { ProjectsRepository } from "../../repositories/implementations/ProjectsRepository";
import { FindAllProjectsByUsernameUseCase } from "./FindAllProjectsByUsernameUseCase";
import { FindAllProjectsByUsernameController } from "./FindAllProjectsByUsernameController";

const projectsRepository = ProjectsRepository.getInstance()
const findAllProjectsByUsernameUseCase = new FindAllProjectsByUsernameUseCase(projectsRepository)
const findAllProjectsByUsernameController = new FindAllProjectsByUsernameController(findAllProjectsByUsernameUseCase)

export { findAllProjectsByUsernameController }