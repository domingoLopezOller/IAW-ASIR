import { Categoria } from "src/recambios/categoria/entities/categoria.entity";
import { ProveedorSuministraPieza } from "src/recambios/proveedor-suministra-pieza/entities/proveedor-suministr-pieza.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pieza {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  nombre: string;

  @Column()
  color: string;

  @Column('decimal', { precision: 7, scale: 2 })
  precio: number;

  @ManyToOne(() => Categoria, categoria => categoria.piezas)
  categoria: Categoria;

  @OneToMany(() => ProveedorSuministraPieza, psp => psp.pieza)
  proveedorSuministraPiezas: ProveedorSuministraPieza[];
}