import { Injectable } from '@nestjs/common';
import { SignupDto } from 'src/dto/signup.dto';
import { Users } from 'src/entities/Users.entity';

@Injectable()
export class UserService {
  private auth: Users[] = [];

  async login(authData: SignupDto) {}
}
