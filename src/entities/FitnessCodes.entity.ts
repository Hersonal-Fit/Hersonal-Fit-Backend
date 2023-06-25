import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Users } from './Users.entity';
import { FitnessAchieve } from './FitnessAchieve.entity';
import { Communities } from './Communities.entity';

@Entity({ name: 'FitnessCodes' })
export class FitnessCodes {
  @PrimaryGeneratedColumn('uuid')
  codeId: UUID;

  @Column({ type: 'varchar', nullable: true })
  achieveId: UUID;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;

  @Column({ type: 'varchar', nullable: false })
  codeUseTable: string;

  @Column({ type: 'varchar', nullable: false })
  codeUseColumn: string;
  //F0001 ~  운동 D0001 ~ 식단
  @Column({ type: 'varchar', nullable: false })
  codeValue: string;
  //해당하는 코드의 이름
  @Column({ type: 'varchar', nullable: false })
  codeName: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Users, (users) => users.fitnesscodes, {
    onDelete: 'CASCADE',
  })
  users: Users[];

  @ManyToOne(
    () => FitnessAchieve,
    (fitnessachieve) => fitnessachieve.fitnesscodes,
    {
      onDelete: 'CASCADE',
    },
  )
  fitnessachieve: FitnessAchieve[];

  @ManyToOne(() => Communities, (communities) => communities.fitnesscodes, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];
}
