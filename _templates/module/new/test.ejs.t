---
to: test/<%= name %>.spec.ts
---
<%
  pluralKebabName = h.changeCase.kebab(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import request, { SuperTest, Test } from 'supertest'
import createServer from '../src/server'

const BASE_URL = '/api/v1'

describe('<%= pluralPascalName %> API module ', () => {
  let agent: SuperTest<Test>

  beforeAll(async () => {
    const app = await createServer()
    agent = request.agent(app)
  })

  describe('GET /<%= pluralKebabName %>', () => {
    it('responds with a list', async () => {
      const response = await agent.get(`${BASE_URL}/<%= pluralKebabName %>`)
      expect(response.status).toBe(200)
      expect(response.body).toEqual([{ id: 'id-123', text: 'test :)' }])
    })
  })

  describe('POST /<%= pluralKebabName %>', () => {
    it('responds with a created object', async () => {
      const body = { text: 'test' }
      const response = await agent.post(`${BASE_URL}/<%= pluralKebabName %>`).send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('GET /<%= pluralKebabName %>/:id', () => {
    it('responds with a correct object', async () => {
      const response = await agent.get(`${BASE_URL}/<%= pluralKebabName %>/id-123`)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test :)' })
    })
  })

  describe('PUT /<%= pluralKebabName %>/:id', () => {
    it('responds with an updated object', async () => {
      const body = { text: 'test' }
      const response = await agent.put(`${BASE_URL}/<%= pluralKebabName %>/id-123`).send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('PATCH /<%= pluralKebabName %>/:id', () => {
    it('responds with an updated object', async () => {
      const body = { text: 'test' }
      const response = await agent
        .patch(`${BASE_URL}/<%= pluralKebabName %>/id-123`)
        .send(body)
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ id: 'id-123', text: 'test' })
    })
  })

  describe('DELETE /<%= pluralKebabName %>/:id', () => {
    it('deletes an object', async () => {
      const response = await agent.delete(`${BASE_URL}/<%= pluralKebabName %>/id-123`)
      expect(response.status).toBe(204)
      expect(response.body).toEqual({})
    })
  })
})
