import { response, Router } from 'express'
import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { createProjectController } from '../modules/projects/useCases/createProject'

const projectsRoutes = Router()

projectsRoutes.post("/", ensureAuthenticateUser, (request, response) => {
  return createProjectController.handle(request, response)
})

export { projectsRoutes }