import { Module } from "@nestjs/common";
import { UserController } from "src/controllers/users.controller";
import { UserServices } from "src/services/users.service";

@Module({ controllers: [UserController], providers: [UserServices] })
export class UsersModule {}
