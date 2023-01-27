import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Article from "../Article/Article.entity";
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

  @OneToMany(() => Article, (article) => article.category)
  @Field(() => [Article])
  articles: Article[];
}
