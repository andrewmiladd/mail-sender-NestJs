import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../models/users.model";
import { UserController } from "../controllers/users.controller";
import { UserServices } from "../services/users.service";
import { AuthService } from "src/services/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "src/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "src/controllers/auth.controller";
@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MY_MONGODB),
        MongooseModule.forFeature([{ name: "users", schema: UserSchema }]),
        PassportModule,
        JwtModule.register({
            secret: process.env.MY_SECRET_KEY,
            signOptions: { expiresIn: "60s" },
        }),
    ],

    providers: [UserServices, AuthService, LocalStrategy],
    controllers: [UserController, AuthController],
})
export class UserModule {}
