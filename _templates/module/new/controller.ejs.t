---
to: src/api/<%= name %>/<%= name %>.controller.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularCamelName = h.changeCase.camel(singularName)
  singularPascalName = h.changeCase.pascal(singularName)
  pluralCamelName = h.changeCase.camel(name)
  pluralPascalName = h.changeCase.pascal(name)
%>import {
  JsonController,
  Get,
  Param,
  Post,
  Body,
  Put,
  Patch,
  Delete,
  OnUndefined,
} from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'
import {
  <%= singularPascalName %>Dto,
  Create<%= singularPascalName %>Dto,
  Update<%= singularPascalName %>Dto,
  Patch<%= singularPascalName %>Dto,
} from './<%= name %>.dtos'
import { <%= pluralPascalName %>Service } from './services'

@JsonController('/<%= pluralCamelName %>')
class <%= pluralPascalName %>Controller {
  constructor(private readonly <%= pluralCamelName %>Service: <%= pluralPascalName %>Service) {}

  @Get()
  @ResponseSchema(<%= singularPascalName %>Dto, { isArray: true })
  async get<%= pluralPascalName %>() {
    return this.<%= pluralCamelName %>Service.getAll<%= pluralPascalName %>()
  }

  @Post()
  @ResponseSchema(<%= singularPascalName %>Dto)
  async create<%= singularPascalName %>(@Body({ validate: true }) body: Create<%= singularPascalName %>Dto) {
    return this.<%= pluralCamelName %>Service.create<%= singularPascalName %>(body)
  }

  @Get('/:id')
  @ResponseSchema(<%= singularPascalName %>Dto)
  async get<%= singularPascalName %>(@Param('id') id: string) {
    return this.<%= pluralCamelName %>Service.get<%= singularPascalName %>ById(id)
  }

  @Put('/:id')
  @ResponseSchema(<%= singularPascalName %>Dto)
  async update<%= singularPascalName %>(
    @Param('id') id: string,
    @Body({ validate: true }) body: Update<%= singularPascalName %>Dto
  ) {
    return this.<%= pluralCamelName %>Service.update<%= singularPascalName %>(id, body)
  }

  @Patch('/:id')
  @ResponseSchema(<%= singularPascalName %>Dto)
  async patch<%= singularPascalName %>(
    @Param('id') id: string,
    @Body({ validate: true }) body: Patch<%= singularPascalName %>Dto
  ) {
    return this.<%= pluralCamelName %>Service.patch<%= singularPascalName %>(id, body)
  }

  @Delete('/:id')
  @OnUndefined(204)
  async delete<%= singularPascalName %>(@Param('id') id: string) {
    this.<%= pluralCamelName %>Service.delete<%= singularPascalName %>(id)
  }
}

export default <%= pluralPascalName %>Controller
