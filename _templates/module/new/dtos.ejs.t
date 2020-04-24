---
to: src/api/<%= name %>/<%= name %>.dtos.ts
---
<%
  singularName = h.inflection.singularize(name)
  singularPascalName = h.changeCase.pascal(singularName)
%>import { IsUUID, IsString, IsDateString, IsOptional } from 'class-validator'

export class <%= singularPascalName %>Dto {
  @IsUUID()
  id: string

  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class Create<%= singularPascalName %>Dto {
  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class Update<%= singularPascalName %>Dto {
  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class Patch<%= singularPascalName %>Dto {
  @IsString()
  @IsOptional()
  name?: string

  @IsDateString()
  @IsOptional()
  birthDate?: Date | string

  @IsDateString()
  @IsOptional()
  deathDate?: Date | string
}
