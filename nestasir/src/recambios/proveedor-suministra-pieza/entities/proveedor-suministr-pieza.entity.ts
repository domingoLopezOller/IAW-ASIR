import { Pieza } from "src/recambios/pieza/entities/pieza.entity";
import { Proveedor } from "src/recambios/proveedor/entities/proveedor.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class ProveedorSuministraPieza {
  @PrimaryColumn()
  codigoProveedor: number;

  @PrimaryColumn()
  codigoPieza: number;

  @PrimaryColumn()
  fecha: Date;

  @Column()
  cantidad: number;

  @ManyToOne(() => Proveedor, proveedor => proveedor.proveedorSuministraPiezas)
  @JoinColumn({ name: 'codigoProveedor' })
  proveedor: Proveedor;

  @ManyToOne(() => Pieza, pieza => pieza.proveedorSuministraPiezas)
  @JoinColumn({ name: 'codigoPieza' })
  pieza: Pieza;
}
