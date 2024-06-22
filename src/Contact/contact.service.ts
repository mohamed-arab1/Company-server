/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './schema/contact.schema';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message-dto';
@Injectable()
export class ContactService {
    constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>){}

    async createMessage(createMessageDto: CreateMessageDto) {
        try{
            const newMessage = new this.contactModel({...createMessageDto});
            return newMessage.save()
        } catch (error) {
            throw new HttpException(
                error.message || 'Failed to create new message',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    async getAllMessage() {
        try{
            const findAllMessages = await this.contactModel.find({}).exec()
            return findAllMessages;
        }catch(error) {
            throw new HttpException(
                error.message || 'Failed to get all message',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }
}
