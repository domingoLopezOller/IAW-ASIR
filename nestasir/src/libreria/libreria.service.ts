import { Injectable } from '@nestjs/common';
import { CreateLibreriaDto } from './dto/create-libreria.dto';
import { UpdateLibreriaDto } from './dto/update-libreria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libreria } from './entities/libreria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibreriaService {
  constructor(
      @InjectRepository(Libreria)
      private usuarioRepository: Repository<Libreria>,
    ) {}
  create(createLibreriaDto: CreateLibreriaDto): Promise<Libreria> {
      const libro = this.usuarioRepository.create(createLibreriaDto);
      return this.usuarioRepository.save(libro);
    }

  findAll() {
    return `This action returns all libreria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libreria`;
  }

  update(id: number, createLibreriaDto: CreateLibreriaDto) {
    return `This action updates a #${id} libreria`;
  }

  remove(id: number) {
    return `This action removes a #${id} libreria`;
  }
}
