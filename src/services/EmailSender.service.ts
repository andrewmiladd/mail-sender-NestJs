import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailSendService {
    constructor(private mailService: MailerService) {}
    async singleMail(toEmail: string[], message: string): Promise<MailerService> {
        try {
            const response = await this.mailService.sendMail({
                from: "andrewmilad11@gmail.com",
                to: toEmail,
                subject: "Mail sender app",
                text: message,
            });
            return response;
        } catch (error) {
            return error;
        }
    }
}
