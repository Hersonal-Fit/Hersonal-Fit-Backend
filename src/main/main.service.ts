import { FitnessAchieve } from './../entities/FitnessAchieve.entity';
import { FitnessCodes } from './../entities/FitnessCodes.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { FitnessAchieve } from 'src/entities/FitnessAchieve.entity';
import { Users } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(FitnessAchieve)
    private readonly fitnessAchieveRepository: Repository<FitnessAchieve>,
    @InjectRepository(FitnessCodes)
    private readonly fitnessCodesRepository: Repository<FitnessCodes>,
  ) {}

  async findUser(email: string) {
    const findUser = await this.userRepository.findOne({
      where: { email },
    });
    return findUser;
  }

  async getMainPage(email: string) {
    try {
      const findUser = await this.userRepository.findOne({
        where: { email },
      });
      const findRoutine = await this.fitnessAchieveRepository.findOne({
        where: { email },
      });
      return [findRoutine];
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
