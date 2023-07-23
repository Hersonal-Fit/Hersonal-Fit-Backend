import { LoginDto } from 'src/dto/login.dto';
import { SignupDto } from '../dto/signup.dto';
import { UserService } from './user.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class UserController {
  UserService: any;
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() singupData: SignupDto) {
    return this.userService.signup(singupData);
  }

  @Post('login')
  async login(@Body() authData: LoginDto) {
    const token = await this.userService.createToken(authData);
    const getData = await this.userService.login(authData);
    const tokenVerify = await this.userService.verifyToken(token);
    return [token, getData];
  }
}
