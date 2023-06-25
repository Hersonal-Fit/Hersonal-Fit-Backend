import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UUID } from 'crypto';
import { Rates } from './Rates.entity';
import { FitnessCodes } from './FitnessCodes.entity';
import { Communities } from './Communities.entity';

@Entity({ name: 'FitnessAchieve' })
export class FitnessAchieve {
  @PrimaryGeneratedColumn('uuid')
  achieveId: UUID;
  //
  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;
  //요일
  @Column({ type: 'varchar', nullable: false })
  day: string;
  //운동횟수 or 식단량
  @Column({ type: 'varchar', nullable: false })
  routine: string;
  //운동코드AC01 or 식단코드AC02
  @Column({ type: 'varchar', nullable: false })
  achieveCode: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @OneToMany(() => Rates, (rates) => rates.fitnessachieve, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  rates: Rates[];

  @OneToMany(
    () => FitnessCodes,
    (fitnesscodes) => fitnesscodes.fitnessachieve,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  fitnesscodes: FitnessCodes[];

  @OneToOne(() => Communities, (communities) => communities.fitnessachieve, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  communities: Communities[];
}
