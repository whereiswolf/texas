import { Request, Response } from 'express'

const noMethodHandler = (_: Request, response: Response) =>
  response.status(405).json()

export default noMethodHandler
