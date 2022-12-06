import { Injectable, NotAcceptableException } from "@nestjs/common";
import { UserServices } from "../services/users.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userServices: UserServices, private jwtService: JwtService) {}
    async validateUser(email: string, password: string) {
        const user = await this.userServices.getOneUser({ email });
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!user) {
            throw new NotAcceptableException("could not find the user");
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user: any) {
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
