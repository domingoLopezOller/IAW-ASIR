import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Controller("libro") 
export class LibroController {
  constructor(private readonly libroService: LibroService) {}
  @Post()
  create(@Body() createAutorDto: CreateLibroDto) {    return this.libroService.create(createAutorDto);  }
  @Get()
  findAll() {   return this.libroService.findAll();   }
  @Get(':id')
  findOne(@Param('id') id: string) {    return this.libroService.findOne(+id);  }
  @Put(":id")
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateLibroDto) {
    return this.libroService.update(+id, updateAutorDto)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {  return this.libroService.remove(+id);  }
}