---
to: src/models/<%= singularPascalName %>.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
%>/**
 * @swagger
 * components:
 *   schemas:
 *     <%= singularPascalName %>:
 *       title: <%= singularPascalName %>
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         text:
 *           type: string
 */
interface <%= singularPascalName %> {
  id?: string
  text: string
}

export default <%= singularPascalName %>
