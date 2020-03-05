import { Router } from 'express'
import examples from './examples'

export interface Module {
  path: string
  router: Router
}

const router = Router()
const modules: Module[] = [
  // Modules of the app
  examples,
]

modules.forEach(({ path, router }) => router.use(path, router))

export default router
