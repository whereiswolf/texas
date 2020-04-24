import { Service } from 'typedi'
import { CowboysRepository } from '../repositories'
import { Cowboy } from '../models'

@Service()
class CowboysService {
  constructor(private readonly cowboysRepository: CowboysRepository) {}

  getAllCowboys() {
    return this.cowboysRepository.find()
  }

  createCowboy(cowboyData: Omit<Cowboy, 'id'>) {
    return this.cowboysRepository.create(cowboyData)
  }

  getCowboyById(id: string) {
    return this.cowboysRepository.findById(id)
  }

  updateCowboy(id: string, data: Omit<Cowboy, 'id'>) {
    return this.cowboysRepository.update(id, data)
  }

  patchCowboy(id: string, data: Partial<Omit<Cowboy, 'id'>>) {
    return this.cowboysRepository.update(id, data)
  }

  deleteCowboy(id: string) {
    return this.cowboysRepository.delete(id)
  }
}

export default CowboysService
