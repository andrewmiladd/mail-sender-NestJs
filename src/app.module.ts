import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { ConfigModule } from "@nestjs/config";
import { EmailSenderController } from "./controllers/EmailSender.controller";
import { EmailSendService } from "./services/EmailSender.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./models/users.model";
import { UserController } from "./controllers/users.controller";
import { UserServices } from "./services/users.service";
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
        MongooseModule.forRoot(process.env.MY_MONGODB),
        MongooseModule.forFeature([{ name: "users", schema: UserSchema }]),
    ],
    controllers: [AppController, EmailSenderController, UserController],
    providers: [AppService, EmailSendService, UserServices],
})
export class AppModule {}
