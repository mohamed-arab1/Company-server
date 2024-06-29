/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({type: String, required: true})
    firstName: string;

    @Prop({type: String, required: true})
    lastName: string;

    @Prop({type: String, required: true, unique: true})
    email: string;

    @Prop({type: String, required: true})
    password: string;

    @Prop({type: String, required: true})
    confirmPassword: string

}

export const UserSchema = SchemaFactory.createForClass(User)