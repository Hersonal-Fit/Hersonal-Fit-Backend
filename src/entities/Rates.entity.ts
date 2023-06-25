import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { FitnessAchieve } from './FitnessAchieve.entity';
import { Users } from './Users.entity';

@Entity({ name: 'Rates' })
export class Rates {
  @PrimaryGeneratedColumn('uuid')
  rateId: UUID;

  @Column({ type: 'varchar', nullable: true })
  achieveId: UUID;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;

  @Column({ type: 'varchar', nullable: false })
  ratePer: string;

  @Column({ type: 'varchar', nullable: false })
  date: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => FitnessAchieve, (fitnessachieve) => fitnessachieve.rates, {
    onDelete: 'CASCADE',
  })
  fitnessachieve: FitnessAchieve[];

  @ManyToOne(() => Users, (users) => users.rates, { onDelete: 'CASCADE' })
  users: Users[];
}
