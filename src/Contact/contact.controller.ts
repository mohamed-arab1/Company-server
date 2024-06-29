/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateMessageDto } from './dto/create-message-dto';


@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Get()
  getAllMessage() {
    return this.contactService.getAllMessage()
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.contactService.createMessage(createMessageDto)
  }
}
