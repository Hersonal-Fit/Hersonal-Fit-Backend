import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Communities } from './Communities.entity';
import { Users } from './Users.entity';

@Entity({ name: 'Reports' })
export class Reports {
  @PrimaryGeneratedColumn('uuid')
  reportId: UUID;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  communityId: string;

  @Column({ type: 'varchar', nullable: false })
  detail: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Communities, (communities) => communities.reports, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];

  @ManyToOne(() => Users, (users) => users.reports, {
    onDelete: 'CASCADE',
  })
  users: Users[];
}
