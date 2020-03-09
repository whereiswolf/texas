import { object, string } from 'joi'

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateExampleSchema:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           required: true
 */
export const CreateExampleSchema = object().keys({
  text: string(),
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
export const UpdateExampleSchema = object().keys({
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
export const PatchExampleSchema = object().keys({
  text: string(),
})
