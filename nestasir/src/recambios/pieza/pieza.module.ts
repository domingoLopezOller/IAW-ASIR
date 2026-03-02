import { Module } from '@nestjs/common';
import { PiezaService } from './pieza.service';
import { PiezaController } from './pieza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pieza } from './entities/pieza.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pieza])],
  controllers: [PiezaController],
  providers: [PiezaService],
})
export class PiezaModule {}
