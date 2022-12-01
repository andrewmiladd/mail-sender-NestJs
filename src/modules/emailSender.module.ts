import { Module } from "@nestjs/common";
import { EmailSendService } from "src/services/EmailSender.service";
import { EmailSenderController } from "../controllers/EmailSender.controller";

@Module({ controllers: [EmailSenderController], providers: [EmailSendService] })
export class EmailSenderModule {}
