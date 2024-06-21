/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact.service';


@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get("contact")
  getMessage(): string {
    return this.contactService.getMessage();
  }
}
