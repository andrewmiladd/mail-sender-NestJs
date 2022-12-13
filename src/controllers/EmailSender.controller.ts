import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { EmailDto } from "src/DTO/Email.dto";
import { EmailSendService } from "src/services/EmailSender.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("sendEmail")
export class EmailSenderController {
    constructor(private mailService: EmailSendService) {}
    @UseGuards(AuthGuard("jwt"))
    @Post()
    async SendingEmail(@Body() toEmail: EmailDto) {
        const response = await this.mailService.singleMail(toEmail.email, toEmail.message);
        return response;
    }
}
