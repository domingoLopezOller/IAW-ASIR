import { Injectable } from '@nestjs/common';
import { CreateProveedorSuministraPiezaDto } from './dto/create-proveedor-suministra-pieza.dto';
import { UpdateProveedorSuministraPiezaDto } from './dto/update-proveedor-suministra-pieza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorSuministraPieza } from './entities/proveedor-suministr-pieza.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorSuministraPiezaService {
  constructor(
    @InjectRepository(ProveedorSuministraPieza)
    private proveedorSuministraPiezaRepository: Repository<ProveedorSuministraPieza>,
  ) {}
  create(createProveedorSuministraPiezaDto: CreateProveedorSuministraPiezaDto) {
    return this.proveedorSuministraPiezaRepository.save(createProveedorSuministraPiezaDto);}
  findAll() {
    return this.proveedorSuministraPiezaRepository.find({ relations: ['proveedor', 'pieza'] });
  }
  findOne(codigoProveedor: number, codigoPieza: number, fecha: Date) {
    return this.proveedorSuministraPiezaRepository.findOne({where: { codigoProveedor, codigoPieza, fecha },
      relations: ['proveedor', 'pieza'], });
  }
  update(codigoProveedor: number, codigoPieza: number, fecha: Date, updateProveedorSuministraPiezaDto: UpdateProveedorSuministraPiezaDto) {
    return this.proveedorSuministraPiezaRepository.update( { codigoProveedor, codigoPieza, fecha },
      updateProveedorSuministraPiezaDto);
  }
  remove(codigoProveedor: number, codigoPieza: number, fecha: Date) {
    return this.proveedorSuministraPiezaRepository.delete({ codigoProveedor, codigoPieza, fecha });
  }
}
