import { object, string } from '@hapi/joi'

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateExampleSchema:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 *           required: true
 */
export const CreateExampleSchema = object({
  text: string().required(),
})

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateExampleSchema:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 */
export const UpdateExampleSchema = object({
  text: string().required(),
})

/**
 * @swagger
 * components:
 *   schemas:
 *     PatchExampleSchema:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 */
export const PatchExampleSchema = object({
  text: string(),
})
