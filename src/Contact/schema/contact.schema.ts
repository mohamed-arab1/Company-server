/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Contact {

    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true})
    email: string;

    @Prop({type: String, required: true})
    message: string;

}

export const ContactSchema = SchemaFactory.createForClass(Contact);