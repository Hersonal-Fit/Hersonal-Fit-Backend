import { LoginDto } from './../dto/login.dto';
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/dto/signup.dto';
import { Users } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupData: SignupDto) {
    try {
      const { email, password, confirmPassword, nickname } = signupData;
      const findUser = await this.userRepository.findOne({
        where: { email },
      });
      if (password !== confirmPassword)
        throw new ConflictException('패스워드가 일치하지않습니다.');
      if (findUser && nickname === findUser.nickname) {
        throw new ConflictException('이미 존재하는 닉네임입니다.');
      }
      if (findUser && email === findUser.email) {
        throw new ConflictException('이미 존재하는 email입니다.');
      }
      const hashedPassword = await bcrypt.hash(signupData.password, 12);
      const madeUser = await this.userRepository.create({
        email: email,
        nickname: nickname,
        password: hashedPassword,
      });
      await this.userRepository.save(madeUser);
      return [madeUser, '회원가입에 성공하였습니다.'];
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async login(authData: LoginDto) {
    try {
      const { email, password } = authData;

      const findUser = await this.userRepository.findOne({
        where: { email },
      });
      if (!findUser)
        throw new UnauthorizedException(
          '이메일 또는 비밀번호가 일치하지 않습니다.',
        );
      if (!(await bcrypt.compare(password, findUser.password)))
        throw new UnauthorizedException(
          '이메일 또는 비밀번호가 일치하지 않습니다.',
        );
      return {
        message: '로그인에 성공하였습니다.',
        nickname: findUser.nickname,
      };
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }

  async createToken(authData: LoginDto): Promise<string> {
    const payload = { email: authData.email };
    const expiresIn = 3600;
    const allowdToken = this.jwtService.sign(payload, { expiresIn });
    return `Bearer ${allowdToken}`;
  }

  async verifyToken(token: string): Promise<string> {
    if (token) {
      const [Bearer, proveToken] = token.split(' ');
      if (Bearer === 'Bearer' && proveToken) {
        return token;
      }
    }
    return '토큰인증에 실패하였습니다.';
  }
}
