import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Users{
    @PrimaryColumn()
    id_users:string;

    @Column()
    nombre:string;

    @Column({unique:true})
    email:string;

    @Column()
    contra:string;
}