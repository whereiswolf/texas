import { Request, Response } from 'express'

const noMethodHandler = (_: Request, res: Response) => res.status(405).json()

export default noMethodHandler
