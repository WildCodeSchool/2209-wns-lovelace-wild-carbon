import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import AppUser from '../AppUser/AppUser.entity';

@Entity()
@ObjectType()
export default class Donation {
  constructor(amount: number) {
    this.amount = amount;
  }

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  amount: number;

  @ManyToOne(() => AppUser, (user) => user.donations, {
    onDelete: 'CASCADE',
  })
  @Field(() => AppUser)
  user: AppUser;
}
