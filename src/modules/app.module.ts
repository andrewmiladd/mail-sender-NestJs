import { Module } from "@nestjs/common";
import { AppController } from "../controllers/app.controller";
import { AppService } from "../services/app.service";
import { UserModule } from "./user.module";
import { EmailSenderModule } from "./EmailSender.module";

@Module({
    imports: [UserModule, EmailSenderModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
