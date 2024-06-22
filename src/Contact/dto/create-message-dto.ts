/* eslint-disable prettier/prettier */
import { Prop } from '@nestjs/mongoose';

export class CreateMessageDto {
    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true})
    email: string;

    @Prop({type: String, required: true})
    message: string;
}