import { Example } from 'models'
import { addSmile, mapSmiles } from '.'

describe('examples module utilities', () => {
  describe('addSmile function', () => {
    it('should add ":)" to the text of an Example object', () => {
      const example: Example = { id: 'id-123', text: 'test' }
      const exampleWithSmile = addSmile(example)
      expect(exampleWithSmile.text).toBe('test :)')
    })
  })

  describe('mapSmiles function', () => {
    it('should add ":)" to the each text of an Example object in an array', () => {
      const examples: Example[] = [
        { id: 'id-123', text: 'test' },
        { id: 'id-234', text: 'test1' },
      ]
      const examplesWithSmile = mapSmiles(examples)
      expect(examplesWithSmile).toEqual([
        { id: 'id-123', text: 'test :)' },
        { id: 'id-234', text: 'test1 :)' },
      ])
    })
  })
})
