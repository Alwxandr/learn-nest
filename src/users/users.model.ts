import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany,  Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user.role.model";

interface UserCreationAttrs {
    email: string,
    password : string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example : '1', description: 'Unique id' })
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({ example : 'user@mail.ru', description: 'Email' })
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({ example : '1234', description: 'Password' })
    @Column({type: DataType.STRING, allowNull: false})
    password : string;
    @ApiProperty({ example : 'false', description: 'banned user or not' })
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({ example : 'description of the reason ', description: 'reason' })
    @Column({type: DataType.STRING, allowNull: true})
    banReason : string

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[]
}