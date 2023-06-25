import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Communities } from './Communities.entity';

@Entity({ name: 'HealthTags' })
export class HealthTags {
  @PrimaryGeneratedColumn('uuid')
  tagId: UUID;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  hashtag: string;

  @Column({ type: 'varchar', nullable: false })
  tagOrder: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Communities, (communities) => communities.healthtags, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];
}
