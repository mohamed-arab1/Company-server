/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}
    
    async register (createUserDto: CreateUserDto) {
        try{
            const findUser = await this.userModel.findOne({email: createUserDto.email})
            if(findUser){
                throw new Error("user already exist!")
            }
            if(createUserDto.password !== createUserDto.confirmPassword){
                throw new Error("password not matched!")
            }
            const newUser = new this.userModel({
                ...createUserDto
            })
            return newUser.save();
        }catch(error){
            throw new HttpException(
                error.message || 'Failed to get all message',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    async getAllUsers() {
        try{
            const allUsers = await this.userModel.find({}).exec()
            return allUsers;
        }catch(error){
            throw new HttpException(
                error.message || 'Failed to get all users',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }
}
