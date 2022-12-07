import { Injectable, NotAcceptableException, UnauthorizedException } from "@nestjs/common";
import { UserServices } from "../services/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/DTO/Login.dto";

@Injectable()
export class AuthService {
    constructor(private userServices: UserServices, private jwtService: JwtService) {}
    async validate() {
        //     const email = loginDto.email;
        //     const user = await this.userServices.getOneUser({ email });
        //     const passwordValid = await bcrypt.compare(loginDto.password, user.password);
        //     if (!user) {
        //         throw new NotAcceptableException("could not find the user");
        //     }
        //     if (user && passwordValid) {
        //         return user;
        //     }
        //     return null;
    }
    async login(user: LoginDto) {
        const email = user.email;
        const data = await this.userServices.getOneUser({ email });
        const payload = { email: data.email, sub: data.id };
        const passwordValid = await bcrypt.compare(user.password, data.password);
        console.log(payload);
        if (!passwordValid) {
            throw new UnauthorizedException();
        }
        if (!data) {
            throw new NotAcceptableException("could not find the user");
        }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
