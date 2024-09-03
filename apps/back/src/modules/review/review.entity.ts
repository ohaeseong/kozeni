import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryColumn({ type: 'varchar', length: 100 })
  id: string;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column('text')
  contents: string;

  @Column({ type: 'varchar', length: 30 })
  userId: string;

  @Column('int')
  locationX: number;

  @Column('int')
  locationY: number;

  @Column({ type: 'varchar', length: 30 })
  nation: string;

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
