import { Cowboy } from '../models'
import CowboysRepository from './cowboys.repository'

const cowboysMock: Cowboy[] = [
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

describe('cowboys repository', () => {
  describe('find', () => {
    it('finds and returns a list of all default cowboys', () => {
      const repository = new CowboysRepository()
      const cowboys = repository.find()
      expect(cowboys.length).toBeGreaterThan(0)
    })

    it('finds and returns a list of all cowboys', () => {
      const repository = new CowboysRepository(cowboysMock)
      const cowboys = repository.find()
      expect(cowboys).toEqual(cowboysMock)
    })
  })

  describe('findById', () => {
    it('finds and returns cowboy by id', () => {
      const repository = new CowboysRepository(cowboysMock)
      const cowboy = repository.findById('id-2')
      expect(cowboy).toEqual({
        id: 'id-2',
        name: 'John Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('create', () => {
    it('creates and returns new cowboy', () => {
      const repository = new CowboysRepository(cowboysMock)
      const cowboyData = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const cowboy = repository.create(cowboyData)
      expect(typeof cowboy.id).toBe('string')
      expect(cowboy.name).toBe('Test Test')
      expect(cowboy.birthDate).toBe('2019-04-13T13:31:33.402Z')
      expect(cowboy.deathDate).toBe('2022-04-13T13:31:33.402Z')
    })
  })

  describe('update', () => {
    it('updates and returns cowboy', () => {
      const repository = new CowboysRepository(cowboysMock)
      const id = 'id-2'
      const cowboyData = {
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      }

      const cowboy = repository.update(id, cowboyData)
      expect(cowboy).toEqual({
        id: 'id-2',
        name: 'Test Test',
        birthDate: '2019-04-13T13:31:33.402Z',
        deathDate: '2022-04-13T13:31:33.402Z',
      })
    })
  })

  describe('delete', () => {
    it('deletes cowboy', () => {
      const repository = new CowboysRepository(cowboysMock)
      const id = 'id-2'

      repository.delete(id)
      expect(cowboysMock.find((cowboy) => cowboy.id === id)).toBeUndefined()
    })
  })
})
