import {
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
  CowboyDto,
  CreateCowboyDto,
  UpdateCowboyDto,
  PatchCowboyDto,
} from './cowboys.dtos'
import { CowboysService } from './services'

@JsonController('/cowboys')
class CowboysController {
  constructor(private readonly cowboysService: CowboysService) {}

  @Get()
  @ResponseSchema(CowboyDto, { isArray: true })
  async getCowboys() {
    return this.cowboysService.getAllCowboys()
  }

  @Post()
  @ResponseSchema(CowboyDto)
  async createCowboy(@Body({ validate: true }) body: CreateCowboyDto) {
    return this.cowboysService.createCowboy(body)
  }

  @Get('/:id')
  @ResponseSchema(CowboyDto)
  async getCowboy(@Param('id') id: string) {
    return this.cowboysService.getCowboyById(id)
  }

  @Put('/:id')
  @ResponseSchema(CowboyDto)
  async updateCowboy(
    @Param('id') id: string,
    @Body({ validate: true }) body: UpdateCowboyDto
  ) {
    return this.cowboysService.updateCowboy(id, body)
  }

  @Patch('/:id')
  @ResponseSchema(CowboyDto)
  async patchCowboy(
    @Param('id') id: string,
    @Body({ validate: true }) body: PatchCowboyDto
  ) {
    return this.cowboysService.patchCowboy(id, body)
  }

  @Delete('/:id')
  @OnUndefined(204)
  async deleteCowboy(@Param('id') id: string) {
    this.cowboysService.deleteCowboy(id)
  }
}

export default CowboysController
