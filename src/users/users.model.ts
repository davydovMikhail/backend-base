import { Column, DataType } from "sequelize-typescript";



export class User extends Model<User, > {
    @Column({type: DataType.INTEGER})
    id: number;

    @Column({type: DataType.STRING})
    userName: string;

    @Column({})
    email: string;

    @Column({})
    password: string;

    @Column({})
    phone: string;

    @Column({})
    dateOfBirth: number;

    @Column({})
    sex: string;
}