import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';
import { Communities } from './Communities.entity';

@Entity({ name: 'Files' })
export class Files {
  @PrimaryGeneratedColumn('uuid')
  fileId: UUID;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  file: string;

  @Column({ type: 'varchar', nullable: false })
  fileOrder: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Communities, (communities) => communities.files, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];
}
