import { Example } from 'models'

export const addSmile = (example: Example): Example => ({
  ...example,
  text: `${example.text} :)`,
})

export const mapSmiles = (examples: Example[]): Example[] =>
  examples.map(addSmile)
