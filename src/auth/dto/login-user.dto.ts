/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';

export class LoginUserDto {
    @Prop({type: String, required: true,})
    email: string;

    @Prop({type: String, required: true})
    password: string;

}