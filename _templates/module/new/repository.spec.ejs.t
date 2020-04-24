---
to: src/api/<%= name %>/repositories/<%= name %>.repository.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { <%= singularPascalName %> } from '../models'
import <%= pluralPascalName %>Repository from './<%= name %>.repository'

const <%= pluralCamelName %>Mock: <%= singularPascalName %>[] = [
  {
    id: 'id-1',
    name: 'Test McTesterson',
    birthDate: '2020-04-13T13:31:33.402Z',
    deathDate: '2020-04-13T13:31:33.402Z',
  },
  {
    id: 'id-2',
    name: 'John Test',
    birthDate: '2020-04-13T13:31:33.402Z',
    deathDate: '2020-04-13T13:31:33.402Z',
  },
  {
    id: 'id-3',
    name: 'Test Doe',
    birthDate: '2020-04-13T13:31:33.402Z',
    deathDate: '2020-04-13T13:31:33.402Z',
  },
]

describe('<%= pluralCamelName %> repository', () => {
  describe('find', () => {
    it('finds and returns a list of all default <%= pluralCamelName %>', () => {
      const repository = new <%= pluralPascalName %>Repository()
      const <%= pluralCamelName %> = repository.find()
      expect(<%= pluralCamelName %>.length).toBeGreaterThan(0)
    })

    it('finds and returns a list of all <%= pluralCamelName %>', () => {
      const repository = new <%= pluralPascalName %>Repository(<%= pluralCamelName %>Mock)
      const <%= pluralCamelName %> = repository.find()
      expect(<%= pluralCamelName %>).toEqual(<%= pluralCamelName %>Mock)
    })
  })

  describe('findById', () => {
    it('finds and returns <%= singularCamelName %> by id', () => {
      const repository = new <%= pluralPascalName %>Repository(<%= pluralCamelName %>Mock)
      const <%= singularCamelName %> = repository.findById('id-2')
      expect(<%= singularCamelName %>).toEqual({
        id: 'id-2',
        name: 'John Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('create', () => {
    it('creates and returns new <%= singularCamelName %>', () => {
      const repository = new <%= pluralPascalName %>Repository(<%= pluralCamelName %>Mock)
      const <%= singularCamelName %>Data = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const <%= singularCamelName %> = repository.create(<%= singularCamelName %>Data)
      expect(typeof <%= singularCamelName %>.id).toBe('string')
      expect(<%= singularCamelName %>.name).toBe('Test Test')
      expect(<%= singularCamelName %>.birthDate).toBe('2019-04-13T13:31:33.402Z')
      expect(<%= singularCamelName %>.deathDate).toBe('2022-04-13T13:31:33.402Z')
    })
  })

  describe('update', () => {
    it('updates and returns <%= singularCamelName %>', () => {
      const repository = new <%= pluralPascalName %>Repository(<%= pluralCamelName %>Mock)
      const id = 'id-2'
      const <%= singularCamelName %>Data = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const <%= singularCamelName %> = repository.update(id, <%= singularCamelName %>Data)
      expect(<%= singularCamelName %>).toEqual({
        id: 'id-2',
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      })
    })
  })

  describe('delete', () => {
    it('deletes <%= singularCamelName %>', () => {
      const repository = new <%= pluralPascalName %>Repository(<%= pluralCamelName %>Mock)
      const id = 'id-2'

      repository.delete(id)
      expect(<%= pluralCamelName %>Mock.find((<%= singularCamelName %>) => <%= singularCamelName %>.id === id)).toBeUndefined()
    })
  })
})
