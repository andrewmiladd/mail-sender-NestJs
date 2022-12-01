import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty, Matches } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    confirmPassword: string;
}
