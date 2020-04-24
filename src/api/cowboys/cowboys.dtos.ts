import { IsUUID, IsString, IsDateString, IsOptional } from 'class-validator'

export class CowboyDto {
  @IsUUID()
  id: string

  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class CreateCowboyDto {
  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class UpdateCowboyDto {
  @IsString()
  name: string

  @IsDateString()
  birthDate: Date | string

  @IsDateString()
  deathDate: Date | string
}

export class PatchCowboyDto {
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
