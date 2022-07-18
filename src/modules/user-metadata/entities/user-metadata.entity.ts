import { User } from "src/modules/user/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_metadata')
export class UserMetadata extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "int"})
    age: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    static findOneByName(name: string)
    {
        return this.createQueryBuilder("user")
                    .where("user.name = :name", { name })
                    .getMany();
    }
}
