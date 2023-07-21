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
import Friendship from '../Friendship/FriendShip.entity';
import Donation from '../Donation/Donation.entity';

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

  @OneToMany(() => Friendship, (friend) => friend.invitingUser)
  @Field(() => [Friendship])
  invitingUser: Friendship[];

  @OneToMany(() => Friendship, (friend) => friend.invitedUsers)
  @Field(() => [Friendship])
  invitedUsers: Friendship[];
  @OneToMany(() => Donation, (donation) => donation.user)
  @Field(() => [Donation])
  donations: Donation[];
}
