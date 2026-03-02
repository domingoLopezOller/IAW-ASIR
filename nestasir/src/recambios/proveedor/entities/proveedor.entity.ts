import { ProveedorSuministraPieza } from "src/recambios/proveedor-suministra-pieza/entities/proveedor-suministr-pieza.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  direccion: string;

  @Column()
  ciudad: string;

  @Column()
  provincia: string;

  @OneToMany(() => ProveedorSuministraPieza, psp => psp.proveedor)
  proveedorSuministraPiezas: ProveedorSuministraPieza[];
}