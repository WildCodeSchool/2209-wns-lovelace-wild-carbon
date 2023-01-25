import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Spending from "../Spending/Spending.entity";

@Entity()
@ObjectType()
export default class Category {
  constructor(
    categoryName: string,

  ) {
    this.categoryName = categoryName;
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  categoryName: string;

  @OneToMany(() => Spending, (spending) => spending.category)
  @Field(() => [Spending])
  spendings: Spending[];
}
