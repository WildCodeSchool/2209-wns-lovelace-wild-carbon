import { IsUUID, MinLength } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
class CreateCategoriesArgs {
  @Field()
  @MinLength(1, {
    message: "Le nom de la catégorie doit faire au moins un caractère de long.",
  })
  name: string;
}

export { CreateCategoriesArgs }