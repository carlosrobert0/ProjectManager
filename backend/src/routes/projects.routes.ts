import { response, Router } from 'express'
import { createProjectController } from '../modules/projects/useCases/createProject'

const projectsRoutes = Router()

projectsRoutes.post("/", (request, response) => {
  return createProjectController.handle(request, response)
})

export { projectsRoutes }