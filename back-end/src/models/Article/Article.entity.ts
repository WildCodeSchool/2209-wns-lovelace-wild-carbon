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
export default class Article {
  constructor(
    title: string,
    description: string,
    category: Category

  ) {
    this.title = title;
    this.description = description;
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
  description: string;

  @ManyToOne(() => Category, (category) => category.articles, { eager: true, onDelete: "CASCADE" })
  @Field(() => Category)
  category: Category;
}
