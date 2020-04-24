---
to: src/shared/middlewares/<%= name %>.middleware.spec.ts
---
<%
  camelName = h.changeCase.camel(name)
  pascalName = h.changeCase.pascal(name)
%>import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import <%= pascalName %>Middleware from './<%= name %>.middleware'

describe('<%= pascalName %> middleware', () => {
  it('passes the request to the next handler', async () => {
    const response: any = new Response()
    const request = {} as Request
    const next = jest.fn()

    const middleware = new <%= pascalName %>Middleware()
    middleware.use(request, response, next)
    expect(next).toBeCalled()
  })
})
