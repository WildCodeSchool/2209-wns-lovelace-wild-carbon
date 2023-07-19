import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import AppUser from '../AppUser/AppUser.entity';

@Entity()
@ObjectType()
export default class Donation {
  constructor(amount: number, date: Date) {
    this.amount = amount;
    this.date = date;
  }

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  amount: number;

  @CreateDateColumn()
  @Field()
  date: Date;

  @ManyToOne(() => AppUser, (user) => user.donations, {
    onDelete: 'CASCADE',
  })
  @Field(() => AppUser)
  user: AppUser;
}
