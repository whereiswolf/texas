import request, { SuperTest, Test } from 'supertest'
import createServer from '../src/server'

const BASE_URL = '/api/v1'

describe('Examples API module ', () => {
  let agent: SuperTest<Test>

  beforeAll(async () => {
    const app = await createServer()
    agent = request.agent(app)
  })

  describe('GET /examples', () => {
    it('responds with a list', async () => {
      const response = await agent.get(`${BASE_URL}/examples`)
      expect(response.status).toBe(200)
      expect(response.body).toEqual([{ id: 'id-123', text: 'test :)' }])
    })
  })

  describe('POST /examples', () => {
    it('responds with a created object', async () => {
      const body = { text: 'test' }
      const response = await agent.post(`${BASE_URL}/examples`).send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('GET /examples/:id', () => {
    it('responds with a correct object', async () => {
      const response = await agent.get(`${BASE_URL}/examples/id-123`)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test :)' })
    })
  })

  describe('PUT /examples/:id', () => {
    it('responds with an updated object', async () => {
      const body = { text: 'test' }
      const response = await agent.put(`${BASE_URL}/examples/id-123`).send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('PATCH /examples/:id', () => {
    it('responds with an updated object', async () => {
      const body = { text: 'test' }
      const response = await agent
        .patch(`${BASE_URL}/examples/id-123`)
        .send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('DELETE /examples/:id', () => {
    it('deletes an object', async () => {
      const response = await agent.delete(`${BASE_URL}/examples/id-123`)
      expect(response.status).toBe(204)
      expect(response.body).toEqual({})
    })
  })
})
