import { Injectable } from '@nestjs/common';
import { SignupDto } from 'src/dto/signup.dto';
import { Auth } from 'src/entities/Auth.entity';

@Injectable()
export class UserService {
  private auth: Auth[] = [];

  async login(authData: SignupDto) {}
}
