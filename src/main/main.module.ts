import { MainController } from './main.controller';
import { Module } from '@nestjs/common';
import { MainService } from './main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users.entity';
import { FitnessAchieve } from 'src/entities/FitnessAchieve.entity';
import { FitnessCodes } from 'src/entities/FitnessCodes.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, FitnessAchieve, FitnessCodes]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {},
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [MainController],
  providers: [MainService],
  exports: [MainService],
})
export class MainModule {}
