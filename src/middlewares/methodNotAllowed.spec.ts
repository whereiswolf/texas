import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import methodNotAllowed from './methodNotAllowed'

describe('schemaValidator middleware', () => {
  it('passes the request to the next handler if body schema is correct', async () => {
    const response: any = new Response()
    const request = {} as Request

    methodNotAllowed(request, response)
    expect(response.status).toBeCalledWith(405)
    expect(response.json).toBeCalled()
  })
})
