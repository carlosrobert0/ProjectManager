import { Router } from 'express'
import { projectsRoutes } from './projects.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/projects", projectsRoutes)

export { routes }
