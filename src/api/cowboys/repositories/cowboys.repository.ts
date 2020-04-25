import { Service } from 'typedi'
import crypto from 'crypto'
import { Cowboy } from '../models'

const cowboys: Cowboy[] = [
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Billy Kid',
    birthDate: new Date(1859, 9, 17).toISOString(),
    deathDate: new Date(1881, 7, 14).toISOString(),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'John Wesley Hardin',
    birthDate: new Date(1853, 5, 26).toISOString(),
    deathDate: new Date(1895, 8, 19).toISOString(),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Tom Ketchum',
    birthDate: new Date(1863, 10, 31).toISOString(),
    deathDate: new Date(1901, 4, 26).toISOString(),
  },
]

@Service()
class CowboysRepository {
  find() {
    return cowboys
  }

  create(cowboyData: Omit<Cowboy, 'id'>) {
    const cowboy: Cowboy = {
      ...cowboyData,
      id: crypto.randomBytes(8).toString('hex'),
    }
    cowboys.push(cowboy)
    return cowboy
  }

  findById(id: string) {
    return cowboys.find((cowboy) => cowboy.id === id)
  }

  update(id: string, cowboyData: Partial<Cowboy>) {
    const cowboyIndex = cowboys.findIndex((cowboy) => cowboy.id === id)
    const cowboy: Cowboy = { ...cowboys[cowboyIndex], ...cowboyData }
    cowboys[cowboyIndex] = cowboy
    return cowboy
  }

  delete(id: string) {
    const cowboyIndex = cowboys.findIndex((cowboy) => cowboy.id === id)
    cowboys.splice(cowboyIndex, 1)
    return true
  }
}

export default CowboysRepository
