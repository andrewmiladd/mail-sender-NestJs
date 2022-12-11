import { Controller, Post, Body, Get, Param, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/DTO/CreateUser.dto";
import { UserServices } from "src/services/users.service";
import * as bcrypt from "bcrypt";
import { AuthService } from "src/services/auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("users")
export class UserController {
    constructor(private userServices: UserServices, private authService: AuthService) {}
    @Post()
    async createUser(@Body() userBody: CreateUserDto) {
        const salt = parseInt(process.env.MY_SALT);
        const hashedPassword = await bcrypt.hash(userBody.password, salt);
        const hashedConfirmPassword = await bcrypt.hash(userBody.confirmPassword, salt);
        userBody.confirmPassword = hashedConfirmPassword;
        userBody.password = hashedPassword;
        const newUser = await this.userServices.createUser(userBody);
        return newUser.username;
    }
    @UseGuards(AuthGuard("jwt"))
    @Get()
    async getAllUsers() {
        const allUsers = await this.userServices.getAllUsers();
        return allUsers;
    }
    @Get(":one")
    async getOneUser(@Param("one") email: string) {
        const user = await this.userServices.getOneUser(email);
        return user;
    }
}
