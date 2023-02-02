import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { projectsRoutes } from './projects.routes'
import { usersRoutes } from './users.routes'

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/projects", projectsRoutes)
routes.use("/authenticate", authenticateRoutes)

export { routes }
