import { Request, Response } from 'express'

const methodNotAllowed = (_: Request, res: Response) => res.status(405).json()

export default methodNotAllowed
