import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { EmailSenderController } from "src/controllers/EmailSender.controller";
import { EmailSendService } from "src/services/EmailSender.service";
import { ConfigModule } from "@nestjs/config";
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
    ],
    providers: [EmailSendService],
    controllers: [EmailSenderController],
})
export class EmailSenderModule {}
