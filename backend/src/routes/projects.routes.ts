import { Router } from 'express'
import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { createProjectController } from '../modules/projects/useCases/createProject'
import { deleteProjectByIdAndUsernameController } from '../modules/projects/useCases/deleteProjectByIdAndUsername'
import { findAllProjectsByUsernameController } from '../modules/projects/useCases/findAllProjectsByUsername'
import { findProjectByIdAndUsernameController } from '../modules/projects/useCases/findProjectByIdAndUsername'
import { updateProjectByIdAndController } from '../modules/projects/useCases/updateProjectByIdAndUsername'

const projectsRoutes = Router()

projectsRoutes.post("/", ensureAuthenticateUser, (request, response) => {
  return createProjectController.handle(request, response)
})

projectsRoutes.get("/", ensureAuthenticateUser, (request, response) => {
  return findAllProjectsByUsernameController.handle(request, response)
})

projectsRoutes.get("/:id", ensureAuthenticateUser, (request, response) => {
  return findProjectByIdAndUsernameController.handle(request, response)
})

projectsRoutes.put("/:id", ensureAuthenticateUser, (request, response) => {
  return updateProjectByIdAndController.handle(request, response)
})

projectsRoutes.patch("/:id/done", ensureAuthenticateUser, (request, response) => {
  return updateProjectByIdAndController.handle(request, response)
})

projectsRoutes.delete("/:id", ensureAuthenticateUser, (request, response) => {
  return deleteProjectByIdAndUsernameController.handle(request, response)
})

export { projectsRoutes }