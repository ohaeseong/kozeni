import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Auth {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  id: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  pw?: string;

  @Column({ type: 'varchar', length: 200 })
  token: string;

  @Column({ type: 'varchar', length: 200 })
  refreshToken: string;

  @Column({ type: 'varchar', length: 50 })
  provider: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 6,
  })
  updatedAt: Date;
}
