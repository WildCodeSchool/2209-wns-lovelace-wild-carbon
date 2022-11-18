import { Field, ID, ObjectType } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from "typeorm";

  @Entity()
  @ObjectType()

  export default class Category {
    constructor(
        name: string,
    ) {
        this.name = name;
    }

    @PrimaryGeneratedColumn("uuid")
    @Field(() => ID)
    id: string;

    @Column()
    @Field()
    name: string;
  }

