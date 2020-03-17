import { Request } from 'express'
import { Response } from 'jest-express/lib/response'
import noMethodHandler from '.'

describe('noMethodHandler middleware', () => {
  it('responds with 405', async () => {
    const response: any = new Response()
    const request = {} as Request

    noMethodHandler(request, response)
    expect(response.status).toBeCalledWith(405)
    expect(response.json).toBeCalled()
  })
})
