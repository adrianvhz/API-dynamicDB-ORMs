// import { ValidationPipe } from "@nestjs/common"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}
