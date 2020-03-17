---
to: src/middlewares/<%= name %>/index.ts
---
import { Request, Response, Next } from 'express'

const <%= name %> = (_: Request, res: Response, nex: Next) => next()

export default <%= name %>
