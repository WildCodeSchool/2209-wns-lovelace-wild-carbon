import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

@Entity()
@ObjectType()
export default class Spending {
  constructor(
    title: string,
    date: string,
    weight: number

  ) {
    this.title = title;
    this.date = date;
    this.weight = weight;
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  date: string;

  @Column()
  @Field()
  weight: number;
}
