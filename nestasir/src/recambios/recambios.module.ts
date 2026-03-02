import { Module } from '@nestjs/common';
import { ProveedorModule } from './proveedor/proveedor.module';
import { PiezaModule } from './pieza/pieza.module';
import { ProveedorSuministrPiezaModule } from './proveedor-suministra-pieza/proveedor-suministra-pieza.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ProveedorModule, PiezaModule, ProveedorSuministrPiezaModule, CategoriaModule]
})
export class RecambiosModule {}
