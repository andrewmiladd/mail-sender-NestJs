import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailSendService {
    constructor(private mailService: MailerService) {}
    async singleMail(toEmail: string) {
        const response = await this.mailService.sendMail({
            from: "jideve6658@nubotel.com",
            to: toEmail,
            subject: "success!",
            text: "Welcome to my first mail from my api",
        });
        return response;
    }
}
