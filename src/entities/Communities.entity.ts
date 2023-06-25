import { Reports } from './Reports.entity';
import { Users } from 'src/entities/Users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { UUID } from 'crypto';
import { HealthTags } from './HealthTags.entity';
import { Files } from './Files.entity';
import { Likes } from './Likes.entity';
import { Comments } from './Comments.entity';
import { FitnessAchieve } from './FitnessAchieve.entity';
import { FitnessCodes } from './FitnessCodes.entity';

@Entity({ name: 'Communities' })
export class Communities {
  @PrimaryGeneratedColumn('uuid')
  communityId: UUID;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  desc: string;
  //PS01-활성 PS02-신고 PS03-삭제
  @Column({ type: 'varchar', nullable: false, default: 'PS01' })
  communityStatus: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @OneToMany(() => Users, (users) => users.communities, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  users: Users[];

  @ManyToOne(() => HealthTags, (healthtags) => healthtags.communities, {
    onDelete: 'CASCADE',
  })
  healthtags: HealthTags[];

  @ManyToOne(() => Files, (files) => files.communities, {
    onDelete: 'CASCADE',
  })
  files: Files[];

  @ManyToOne(() => Likes, (likes) => likes.communities, {
    onDelete: 'CASCADE',
  })
  likes: Likes[];

  @ManyToOne(() => Reports, (reports) => reports.communities, {
    onDelete: 'CASCADE',
  })
  reports: Reports[];

  @ManyToOne(() => Comments, (comments) => comments.communities, {
    onDelete: 'CASCADE',
  })
  comments: Comments[];

  @ManyToOne(
    () => FitnessAchieve,
    (fitnessachieve) => fitnessachieve.communities,
    {
      onDelete: 'CASCADE',
    },
  )
  fitnessachieve: FitnessAchieve[];

  @OneToMany(() => FitnessCodes, (fitnesscodes) => fitnesscodes.communities, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  fitnesscodes: FitnessCodes[];
}
