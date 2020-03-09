import { Router } from 'express'
import { schemaValidator } from 'middlewares'
import {
  CreateExampleSchema,
  UpdateExampleSchema,
  PatchExampleSchema,
} from '../schemas'
import {
  getExamples,
  createExample,
  getExample,
  updateExample,
  deleteExample,
} from '../controllers'

const router = Router()

/**
 * @swagger
 * /api/examples:
 *   get:
 *    tags:
 *     - Examples
 *    description: Returns list of examples
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Example'
 */
router.get('/', getExamples)

/**
 * @swagger
 * /api/examples/{id}:
 *   get:
 *    tags:
 *     - Examples
 *    description: Returns example object
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Example'
 */
router.get('/:id', getExample)

/**
 * @swagger
 * /api/examples:
 *   post:
 *    tags:
 *     - Examples
 *    description: Returns example object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateExampleSchema'
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Example'
 */
router.post('/', schemaValidator(CreateExampleSchema), createExample)

/**
 * @swagger
 * /api/examples/{id}:
 *   put:
 *    tags:
 *     - Examples
 *    description: Updates example object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateExampleSchema'
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Example'
 */
router.put('/:id', schemaValidator(UpdateExampleSchema), updateExample)

/**
 * @swagger
 * /api/examples/{id}:
 *   patch:
 *    tags:
 *     - Examples
 *    description: Patches example object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PatchExampleSchema'
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Example'
 */
router.patch('/:id', schemaValidator(PatchExampleSchema), updateExample)

/**
 * @swagger
 * /api/examples/{id}:
 *   delete:
 *    tags:
 *     - Examples
 *    description: Deletes example object
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '204':
 *        description: Success (No content)
 *        content:
 *          application/json:
 *            schema:
 *              type: boolean
 */
router.delete('/:id', deleteExample)

export default router
