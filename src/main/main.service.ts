import { FitnessCodes } from './../entities/FitnessCodes.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FitnessAchieve } from 'src/entities/FitnessAchieve.entity';
import { Users } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly fitnessAchieveRepository: Repository<FitnessAchieve>,
    private readonly fitnessCodesRepository: Repository<FitnessCodes>
  ) {}

  async findUser(email: string) {
    const findUser = await this.userRepository.findOne({
      where: { email },
    });
    return findUser
  }

  async getMainPage(email: string) {
    try {
<<<<<<< HEAD
      const findUser = await this.userRepository.findOne({
        where: { email },
      });
      const findRoutine = await this.fitnessAchieveRepository.findOne({
        where: {email}
      })
      return [findRoutine];
=======
      
      const findRoutine = await this.fitnessAchieveRepository.find({email})
      return findRoutine;
>>>>>>> eb2265b0a1815290279f516a59761893997b9656
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
