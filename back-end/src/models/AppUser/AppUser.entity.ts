import { IsEmail } from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';
import Spending from '../Spending/Spending.entity';

@Entity()
@ObjectType()
export default class AppUser {
  constructor(
    email: string,
    hashedPassword: string,
    firstName: string,
    lastName: string
  ) {
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  @Index({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  hashedPassword: string;

  @OneToMany(() => Spending, (spending) => spending.user)
  @Field(() => [Spending])
  spendings: Spending[];
}
