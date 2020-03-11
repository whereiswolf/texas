---
to: src/api/<%= name %>/routes/index.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralKebabName = h.changeCase.kebab(name)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import { Router } from 'express'
import { validator } from 'middlewares'
import {
  Create<%= singularPascalName %>Schema,
  Update<%= singularPascalName %>Schema,
  Patch<%= singularPascalName %>Schema,
} from '../schemas'
import {
  get<%= pluralPascalName %>,
  create<%= singularPascalName %>,
  get<%= singularPascalName %>,
  update<%= singularPascalName %>,
  delete<%= singularPascalName %>,
} from '../controllers'

const router = Router()

/**
 * @swagger
 * /api/<%= pluralKebabName %>:
 *   get:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Returns list of <%= pluralCamelName %>
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/<%= singularPascalName %>'
 */
router.get('/', get<%= pluralPascalName %>)

/**
 * @swagger
 * /api/<%= pluralKebabName %>/{id}:
 *   get:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Returns <%= singularCamelName %> object
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
 *              $ref: '#/components/schemas/<%= singularPascalName %>'
 */
router.get('/:id', get<%= singularPascalName %>)

/**
 * @swagger
 * /api/<%= pluralKebabName %>:
 *   post:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Creates <%= singularCamelName %> object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Create<%= singularPascalName %>Schema'
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/<%= singularPascalName %>'
 */
router.post('/', validator.body(Create<%= singularPascalName %>Schema), create<%= singularPascalName %>)

/**
 * @swagger
 * /api/<%= pluralKebabName %>/{id}:
 *   put:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Updates <%= singularCamelName %> object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update<%= singularPascalName %>Schema'
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
 *              $ref: '#/components/schemas/<%= singularPascalName %>'
 */
router.put(
  '/:id',
  validator.id,
  validator.body(Update<%= singularPascalName %>Schema),
  update<%= singularPascalName %>
)

/**
 * @swagger
 * /api/<%= pluralKebabName %>/{id}:
 *   patch:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Patches <%= singularCamelName %> object
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Patch<%= singularPascalName %>Schema'
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
 *              $ref: '#/components/schemas/<%= singularPascalName %>'
 */
router.patch(
  '/:id',
  validator.id,
  validator.body(Patch<%= singularPascalName %>Schema),
  update<%= singularPascalName %>
)

/**
 * @swagger
 * /api/<%= pluralKebabName %>/{id}:
 *   delete:
 *    tags:
 *     - <%= pluralPascalName %>
 *    description: Deletes <%= singularCamelName %> object
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
router.delete('/:id', validator.id, delete<%= singularPascalName %>)

export default router
