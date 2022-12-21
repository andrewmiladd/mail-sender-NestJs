import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EmailSenderController } from "src/controllers/EmailSender.controller";
import { EmailSendService } from "src/services/EmailSender.service";
import { AppController } from "../controllers/app.controller";
import { AppService } from "../services/app.service";
import { UserModule } from "./user.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        UserModule,
        MailerModule.forRoot({
            transport: {
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.MY_USER,
                    pass: process.env.MY_PASS,
                },
            },
        }),
    ],
    controllers: [AppController, EmailSenderController],
    providers: [AppService, EmailSendService],
})
export class AppModule {}
