import { Reports } from './Reports.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Rates } from './Rates.entity';
import { FitnessCodes } from './FitnessCodes.entity';
import { Comments } from './Comments.entity';
import { Communities } from './Communities.entity';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryColumn({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  accessToken: string;

  @Column({ type: 'varchar', nullable: false })
  nickname: string;

  @Column({ type: 'varchar', nullable: false, default: 'LT01' })
  loginType: string;

  @Column({ type: 'varchar', nullable: false, default: 'US01' })
  userStatus: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @OneToMany(() => Rates, (rates) => rates.users, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  rates: Rates[];

  @OneToMany(() => FitnessCodes, (fitnesscodes) => fitnesscodes.users, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  fitnesscodes: FitnessCodes[];

  @OneToMany(() => Comments, (comments) => comments.users, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  comments: Comments[];

  @OneToMany(() => Communities, (communities) => communities.users, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  communities: Communities[];

  @OneToMany(() => Reports, (reports) => reports.users, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  reports: Reports[];
}
