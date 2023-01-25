import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";
import Category from "../Category/Category.entity";
import Spending from "../Spending/Spending.entity";

@Entity()
@ObjectType()
export default class Article {
  constructor(
    title: string,
    description: string,


  ) {
    this.title = title;
    this.description = description;

  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  // @OneToOne(() => Category, (category) => category.article, { eager: true })
  // @Field(() => Category)
  // category: Category;
}
