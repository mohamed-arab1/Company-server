/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private readonly jwtService: JwtService){}
    private readonly saltRounds = 10;

    async register (createUserDto: CreateUserDto) {
        try{
            const findUser = await this.userModel.findOne({email: createUserDto.email})
            if(findUser){
                throw new Error("user already exist!")
            };
            if(createUserDto.password !== createUserDto.confirmPassword){
                throw new Error("password not matched!")
            };

            const salt = await bcrypt.genSalt(this.saltRounds);
            const hashPassword = await bcrypt.hash(createUserDto.password, salt);
            const hashConfirmPassword = await bcrypt.hash(createUserDto.confirmPassword, salt);
            const newUser = new this.userModel({
                ...createUserDto,
                password: hashPassword,
                confirmPassword: hashConfirmPassword,
            });
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
            const allUsers = await this.userModel
            .find({})
            .select({password: false, confirmPassword: false})
            .exec()
            return allUsers;
        }catch(error){
            throw new HttpException(
                error.message || 'Failed to get all users',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }

    async login(loginUserDto: LoginUserDto) {
        try{
            const findUser = await this.userModel.findOne({email: loginUserDto.email})
            if(!findUser){
                throw new Error("email or password is wrong!")
            }
            const isPasswordMatch = await bcrypt.compare(loginUserDto.password, findUser.password);
            if(!isPasswordMatch){
                throw new Error("email or password is wrong!")
            }
            const payload = {userName: findUser.firstName, sub: findUser._id}
            return {
                access_token: this.jwtService.sign(payload)
            }
        }catch(error){
            throw new HttpException(
                error.message || 'email or password is wrong!',
                error.status || HttpStatus.BAD_REQUEST
            )
        }
    }
}
