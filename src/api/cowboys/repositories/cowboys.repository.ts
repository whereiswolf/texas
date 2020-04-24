import { Service } from 'typedi'
import crypto from 'crypto'
import { Cowboy } from '../models'

const cowboysMock: Cowboy[] = [
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Billy Kid',
    birthDate: new Date(1859, 9, 17),
    deathDate: new Date(1881, 7, 14),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'John Wesley Hardin',
    birthDate: new Date(1853, 5, 26),
    deathDate: new Date(1895, 8, 19),
  },
  {
    id: crypto.randomBytes(8).toString('hex'),
    name: 'Tom Ketchum',
    birthDate: new Date(1863, 10, 31),
    deathDate: new Date(1901, 4, 26),
  },
]

@Service()
class CowboysRepository {
  constructor(private cowboys: Cowboy[] = cowboysMock) {}

  find() {
    return this.cowboys
  }

  create(cowboyData: Omit<Cowboy, 'id'>) {
    const cowboy: Cowboy = {
      ...cowboyData,
      id: crypto.randomBytes(8).toString('hex'),
    }
    this.cowboys.push(cowboy)
    return cowboy
  }

  findById(id: string) {
    return this.cowboys.find((cowboy) => cowboy.id === id)
  }

  update(id: string, cowboyData: Partial<Cowboy>) {
    const cowboyIndex = this.cowboys.findIndex((cowboy) => cowboy.id === id)
    const cowboy: Cowboy = { ...this.cowboys[cowboyIndex], ...cowboyData }
    this.cowboys[cowboyIndex] = cowboy
    return cowboy
  }

  delete(id: string) {
    const cowboyIndex = this.cowboys.findIndex((cowboy) => cowboy.id === id)
    this.cowboys.splice(cowboyIndex, 1)
    return true
  }
}

export default CowboysRepository
