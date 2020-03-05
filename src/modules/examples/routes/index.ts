import { Router } from 'express'
import { schemaValidator } from 'middlewares'
import { CreateExampleSchema } from '../schemas'
import { getExamples, createExample } from '../controllers'

const router = Router()

/**
 * @swagger
 * /api/examples:
 *   get:
 *     description: Returns examples
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: examples
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/GetExamplesSchema'
 *
 * definitions:
 *   GetExamplesSchema:
 *     type: object
 *     required:
 *       - id
 *       - text
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       text:
 *         type: string
 */
router.get('/', getExamples)

/**
 * @swagger
 * /api/examples:
 *   post:
 *     description: Creates an example
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: example
 *        description: Example object
 *        in: body
 *        required: true
 *        type: object
 *        schema:
 *          $ref: '#/definitions/CreateExampleSchema'
 *     responses:
 *       200:
 *         description: examples
 *         schema:
 *           $ref: '#/definitions/CreateExampleSchema'
 *
 * definitions:
 *   CreateExampleSchema:
 *     type: object
 *     required:
 *       - text
 *     properties:
 *       text:
 *         type: string
 */
router.post('/', schemaValidator(CreateExampleSchema), createExample)

export default router
