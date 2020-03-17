---
to: src/middlewares/<%= name %>/index.spec.ts
---
import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import <%= name %> from '.'

describe('<%= name %> middleware', () => {
  it('passes the request to the next handler', async () => {
    const response: any = new Response()
    const request = {} as Request
    const next = jest.fn()

    <%= name %>(request, response, next)
    expect(response.status).toBeCalledWith(405)
    expect(response.json).toBeCalled()
  })
})
