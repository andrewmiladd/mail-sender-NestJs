import { Controller, Post, Body, Get } from "@nestjs/common";
import { CreateUserDto } from "src/DTO/CreateUser.dto";
import { UserServices } from "src/services/users.service";

@Controller("createUser")
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
}
