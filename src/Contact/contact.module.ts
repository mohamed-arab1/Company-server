/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './schema/contact.schema';
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Contact.name, schema: ContactSchema, collection: "messages"}
        ])
    ],
    controllers: [
        ContactController
    ],
    providers: [
        ContactService
    ],
})

export class ContactModule {}