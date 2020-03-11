---
to: src/api/<%= name %>/services/index.spec.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
%>import { <%= singularPascalName %> } from 'models'
import { addSmile, mapSmiles } from '.'

describe('<%= pluralCamelName %> module utilities', () => {
  describe('addSmile function', () => {
    it('should add ":)" to the text of an <%= singularPascalName %> object', () => {
      const <%= singularCamelName %>: <%= singularPascalName %> = { id: 'id-123', text: 'test' }
      const <%= singularCamelName %>WithSmile = addSmile(<%= singularCamelName %>)
      expect(<%= singularCamelName %>WithSmile.text).toBe('test :)')
    })
  })

  describe('mapSmiles function', () => {
    it('should add ":)" to the each text of an <%= singularPascalName %> object in an array', () => {
      const <%= pluralCamelName %>: <%= singularPascalName %>[] = [
        { id: 'id-123', text: 'test' },
        { id: 'id-234', text: 'test1' },
      ]
      const <%= pluralCamelName %>WithSmile = mapSmiles(<%= pluralCamelName %>)
      expect(<%= pluralCamelName %>WithSmile).toEqual([
        { id: 'id-123', text: 'test :)' },
        { id: 'id-234', text: 'test1 :)' },
      ])
    })
  })
})
