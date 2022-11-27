import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { ConfigModule } from "@nestjs/config";
import { EmailSenderController } from "./controllers/EmailSender.controller";
import { EmailSendService } from "./services/EmailSender.service";
@Module({
    imports: [
        ConfigModule.forRoot(),
        MailerModule.forRoot({
            transport: {
                host: "in-v3.mailjet.com",
                auth: { user: process.env.MY_API_KEY, pass: process.env.MY_API_SECRET },
            },
        }),
    ],
    controllers: [AppController, EmailSenderController],
    providers: [AppService, EmailSendService],
})
export class AppModule {}
