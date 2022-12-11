import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }
    async validate() {
        //     const user = await this.authService.validate(loginDto);
        //     if (!user) {
        //         throw new UnauthorizedException();
        //     }
        //     return user;
    }
}
