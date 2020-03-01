import { Router } from 'express'
import example from './examples'

const router = Router()

router.use('/examples', example)

export default router
