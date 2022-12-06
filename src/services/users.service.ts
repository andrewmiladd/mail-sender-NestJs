import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/models/users.model";
import { CreateUserDto } from "src/DTO/CreateUser.dto";

@Injectable()
export class UserServices {
    constructor(@InjectModel("users") private userModel: Model<UserDocument>) {}
    async createUser(userBody: CreateUserDto): Promise<User> {
        try {
            const newUser = new this.userModel({
                username: userBody.username,
                email: userBody.email,
                password: userBody.password,
                confirmPassword: userBody.confirmPassword,
            });
            await newUser.save();
            return newUser;
        } catch (error) {
            return error;
        }
    }
    async getAllUsers(): Promise<User[]> {
        const allUsers = this.userModel.find();
        return allUsers;
    }
    async getOneUser(query: object) {
        const user = await this.userModel.findOne(query);
        return user;
    }
}
