import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UUID } from 'crypto';
import { Communities } from './Communities.entity';
import { Users } from './Users.entity';

@Entity({ name: 'Comments' })
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  commentId: UUID;

  @Column({ type: 'varchar', nullable: false })
  communityId: UUID;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  comment: string;
  //답글시 댓글의 id값을 저장
  @Column({ type: 'varchar', nullable: true })
  commentParent: UUID;
  //CS01-활성 CS02-신고 CS03-삭제
  @Column({ type: 'varchar', nullable: false, default: 'CS01' })
  commentStatus: string;

  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  //관계설정
  @ManyToOne(() => Communities, (communities) => communities.comments, {
    onDelete: 'CASCADE',
  })
  communities: Communities[];

  @ManyToOne(() => Users, (users) => users.comments, { onDelete: 'CASCADE' })
  users: Users[];
}
