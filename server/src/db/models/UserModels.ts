import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Users{
    @PrimaryColumn()
    id_products:string;

    @Column()
    nombre:string;

    @Column()
    email:string;

    @Column()
    password:string;
}