import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import Category from "../Category/Category.entity";

@Entity()
@ObjectType()
export default class Spending {
  constructor(
    title: string,
    date: string,
    weight: number,
    category: Category,

  ) {
    this.title = title;
    this.date = date;
    this.weight = weight;
    this.category = category;
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

  @ManyToOne(() => Category, (category) => category.spendings, { eager: true })
  @Field(() => Category)
  category: Category;
}
