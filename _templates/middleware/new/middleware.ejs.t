---
to: src/shared/middlewares/<%= name %>.middleware.ts
---
<%
  pascalName = h.changeCase.pascal(name)
%>import { Request, Response, NextFunction } from 'express'
import { ExpressMiddlewareInterface } from 'routing-controllers'

export class <%= pascalName %>Middleware implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction) {
    console.log('Pow! Pow!')
    next()
  }
}

export default <%= pascalName %>Middleware

