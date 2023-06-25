import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Communities } from './Communities.entity';

@Entity({ name: 'Likes' })
export class Likes {
  @PrimaryGeneratedColumn('uuid')
  likeId: UUID;

  @Column({ type: 'varchar', nullable: false })
  communityId: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Communities, (communities) => communities.likes, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];
}
