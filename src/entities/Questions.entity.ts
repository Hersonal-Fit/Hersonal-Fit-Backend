import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UUID } from 'crypto';

@Entity({ name: 'Users' })
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  email: UUID;

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
}
