import { object, string } from 'joi'

export const CreateExampleSchema = object().keys({
  text: string(),
})
