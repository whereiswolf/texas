---
to: src/api/<%= name %>/schemas/index.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularPascalName = h.changeCase.pascal(singularName)
%>import { object, string } from '@hapi/joi'

/**
 * @swagger
 * components:
 *   schemas:
 *     Create<%= singularPascalName %>Schema:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 *           required: true
 */
export const Create<%= singularPascalName %>Schema = object({
  text: string().required(),
})

/**
 * @swagger
 * components:
 *   schemas:
 *     Update<%= singularPascalName %>Schema:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         text:
 *           type: string
 */
export const Update<%= singularPascalName %>Schema = object({
  text: string().required(),
})

/**
 * @swagger
 * components:
 *   schemas:
 *     Patch<%= singularPascalName %>Schema:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 */
export const Patch<%= singularPascalName %>Schema = object({
  text: string(),
})
