import { mocked } from 'ts-jest/utils'
import CowboysService from './cowboys.service'
import { Cowboy } from '../models'

class CowboysRepository {
  find = jest.fn()
  findById = jest.fn()
  create = jest.fn()
  update = jest.fn()
  delete = jest.fn()
}

describe('cowboys service', () => {
  const repository = new CowboysRepository()
  const service = new CowboysService(repository as any)

  describe('getAllCowboys', () => {
    it('returns a list of all cowboys in the repository', () => {
      mocked(repository.find).mockReturnValueOnce([
        {
          id: 'id-123',
          name: 'Test',
          birthDate: '2020-04-13T13:31:33.402Z',
          deathDate: '2020-04-13T13:31:33.402Z',
        },
      ])

      const cowboys = service.getAllCowboys()
      expect(cowboys).toEqual([
        {
          id: 'id-123',
          name: 'Test',
          birthDate: '2020-04-13T13:31:33.402Z',
          deathDate: '2020-04-13T13:31:33.402Z',
        },
      ])
    })
  })

  describe('createCowboy', () => {
    it('creates and returns a new cowboy in the repository', () => {
      const cowboyData: Omit<Cowboy, 'id'> = {
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      }
      mocked(repository.create).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const createdCowboy = service.createCowboy(cowboyData)

      expect(repository.create).toBeCalledWith(cowboyData)
      expect(createdCowboy).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('getCowboyById', () => {
    it('returns cowboy from repository found by id', () => {
      mocked(repository.findById).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const cowboy = service.getCowboyById('test-id')

      expect(repository.findById).toBeCalledWith('test-id')
      expect(cowboy).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('updateCowboy', () => {
    it('updates and returns cowboy in the repository', () => {
      const id = 'test-id'
      const cowboyData: Omit<Cowboy, 'id'> = {
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      }
      mocked(repository.update).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const updatedCowboy = service.updateCowboy(id, cowboyData)

      expect(repository.update).toBeCalledWith(id, cowboyData)
      expect(updatedCowboy).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('patchCowboy', () => {
    it('patches and returns cowboy in the repository', () => {
      const id = 'test-id'
      const cowboyData: Partial<Cowboy> = { name: 'Test' }
      mocked(repository.update).mockReturnValueOnce({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
      const updatedCowboy = service.patchCowboy(id, cowboyData)

      expect(repository.update).toBeCalledWith(id, cowboyData)
      expect(updatedCowboy).toEqual({
        id: 'test-id',
        name: 'Test',
        birthDate: '2020-04-13T13:31:33.402Z',
        deathDate: '2020-04-13T13:31:33.402Z',
      })
    })
  })

  describe('deleteCowboy', () => {
    it('deletes cowboy from the repository', () => {
      const id = 'test-id'
      mocked(repository.delete).mockReturnValueOnce(true)

      const isDeleted = service.deleteCowboy(id)
      expect(repository.delete).toBeCalledWith(id)
      expect(isDeleted).toBe(true)
    })
  })
})
