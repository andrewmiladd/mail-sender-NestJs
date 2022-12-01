import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { AppController } from "../controllers/app.controller";
import { AppService } from "../services/app.service";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../models/users.model";
import { PassportModule } from "@nestjs/passport";
import { EmailSenderModule } from "./emailSender.module";
import { UsersModule } from "./users.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MailerModule.forRoot({
            transport: {
                host: "smtp.mailgun.org",
                auth: {
                    user: process.env.MY_USER,
                    pass: process.env.MY_PASS,
                },
            },
        }),
        EmailSenderModule,
        MongooseModule.forRoot(process.env.MY_MONGODB),
        MongooseModule.forFeature([{ name: "users", schema: UserSchema }]),
        UsersModule,
        PassportModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
