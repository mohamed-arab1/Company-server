/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';

export class CreateUserDto {
    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true,})
    email: string;

    @Prop({type: String, required: true})
    password: string;

    @Prop({type: String, required: true})
    confirmPassword: string

}