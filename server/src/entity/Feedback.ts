import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import { User } from './User';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 400)
  description: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  givenBy: User;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  belongsTo: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
