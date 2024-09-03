import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  id: string;

  @Column({ type: 'varchar', length: 15, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  lineId?: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  kakaoId?: string;

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
