/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto){
        return this.authService.register(createUserDto);
    }
    @Get()
    async getAllUsers(){
        return this.authService.getAllUsers();
    }
}
