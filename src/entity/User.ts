import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @PrimaryColumn()
    username: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

}

