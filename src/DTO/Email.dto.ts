import { IsEmail, IsString } from "class-validator";
export class EmailDto {
    @IsEmail({}, { each: true })
    email: string[];
    @IsString()
    message: string;
}
