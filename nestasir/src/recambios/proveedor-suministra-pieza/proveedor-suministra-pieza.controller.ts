import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProveedorSuministraPiezaService } from './proveedor-suministra-pieza.service';
import { CreateProveedorSuministraPiezaDto } from './dto/create-proveedor-suministra-pieza.dto';
import { UpdateProveedorSuministraPiezaDto } from './dto/update-proveedor-suministra-pieza.dto';

@Controller('proveedor-suministra-pieza')
export class ProveedorSuministraPiezaController {
  constructor(private readonly proveedorSuministraPiezaService: ProveedorSuministraPiezaService) {}
  @Post()
  create(@Body() createProveedorSuministraPiezaDto: CreateProveedorSuministraPiezaDto) {
    return this.proveedorSuministraPiezaService.create(createProveedorSuministraPiezaDto);
  }
  @Get()
  findAll() { return this.proveedorSuministraPiezaService.findAll();}
  @Get(':codigoProveedor/:codigoPieza/:fecha')
  findOne(@Param('codigoProveedor') codigoProveedor: string,@Param('codigoPieza') codigoPieza: string, 
    @Param('fecha') fecha: string) {
    return this.proveedorSuministraPiezaService.findOne(+codigoProveedor, +codigoPieza, new Date(fecha));
  }
  @Put(':codigoProveedor/:codigoPieza/:fecha')
  update(@Param('codigoProveedor') codigoProveedor: string,@Param('codigoPieza') codigoPieza: string,
    @Param('fecha') fecha: string,    @Body() updateProveedorSuministraPiezaDto: UpdateProveedorSuministraPiezaDto) {
    return this.proveedorSuministraPiezaService.update(+codigoProveedor, +codigoPieza, new Date(fecha), updateProveedorSuministraPiezaDto);
  }
  @Delete(':codigoProveedor/:codigoPieza/:fecha')
  remove(@Param('codigoProveedor') codigoProveedor: string,@Param('codigoPieza') codigoPieza: string,
    @Param('fecha') fecha: string) {
    return this.proveedorSuministraPiezaService.remove(+codigoProveedor, +codigoPieza, new Date(fecha));
  }
}
