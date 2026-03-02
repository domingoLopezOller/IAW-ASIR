import { Module } from '@nestjs/common';
import { ProveedorSuministraPiezaService } from './proveedor-suministra-pieza.service';
import { ProveedorSuministraPiezaController } from './proveedor-suministra-pieza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorSuministraPieza } from './entities/proveedor-suministr-pieza.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProveedorSuministraPieza])],
  controllers: [ProveedorSuministraPiezaController],
  providers: [ProveedorSuministraPiezaService],
})
export class ProveedorSuministrPiezaModule {}
