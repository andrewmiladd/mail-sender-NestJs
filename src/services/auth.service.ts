import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserServices } from "../services/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/DTO/Login.dto";

@Injectable()
export class AuthService {
    constructor(private userServices: UserServices, private jwtService: JwtService) {}
    async validate() {
        //     const user = await this.userServices.getOneUser( email );
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
        const data = await this.userServices.getOneUser(user.email);

        const payload = { username: data.username, sub: data.id };

        const passwordValid = await bcrypt.compare(user.password, data.password);

        if (!passwordValid) {
            throw new UnauthorizedException();
        }
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
