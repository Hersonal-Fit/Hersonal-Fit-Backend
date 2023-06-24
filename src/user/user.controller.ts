import { SignupDto } from '../dto/signup.dto';
import { UserService } from './user.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class UserController {
  UserService: any;
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() authData: SignupDto) {
    return this.userService.login(authData);
  }
}
