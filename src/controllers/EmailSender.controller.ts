import { Controller, Post, Body } from "@nestjs/common";
import { EmailDto } from "src/DTO/Email.dto";
import { EmailSendService } from "src/services/EmailSender.service";

@Controller("sendEmail")
export class EmailSenderController {
    constructor(private mailService: EmailSendService) {}
    @Post()
    async SendingEmail(@Body() toEmail: EmailDto) {
        const response = await this.mailService.singleMail(toEmail.email, toEmail.message);
        return response;
    }
}
