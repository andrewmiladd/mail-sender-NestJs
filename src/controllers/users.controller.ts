import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreateUserDto } from "src/DTO/CreateUser.dto";
import { UserServices } from "src/services/users.service";

@Controller("users")
export class UserController {
    constructor(private userServices: UserServices) {}
    @Post()
    async createUser(@Body() userBody: CreateUserDto) {
        const newUser = await this.userServices.createUser(userBody);
        return newUser.username;
    }
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
