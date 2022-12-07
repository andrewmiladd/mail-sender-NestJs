import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/services/auth.service";
import { LoginDto } from "src/DTO/Login.dto";

@Controller("auth")
export class AuthController {
    constructor(private authServices: AuthService) {}
    // @UseGuards(AuthGuard("local"))
    @Post()
    async login(@Body() req: LoginDto) {
        return this.authServices.login(req);
    }
}
