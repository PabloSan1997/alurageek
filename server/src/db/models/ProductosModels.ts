import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Productos{
    @PrimaryColumn()
    id_product:string;

    @Column()
    nombre:string;

    @Column()
    precio:number;

    @Column()
    categoria:string;

    @Column()
    descripcion:string;
}