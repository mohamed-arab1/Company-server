/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
    getMessage() {
        return 'Hello from Contact Service!';
    }
}
