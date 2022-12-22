import { IsUUID, Min, MinLength } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
class CreateSpendingArgs {
  @Field()
  @MinLength(1, {
    message: "Le titre doit faire au moins un caractère de long.",
  })
  title: string;

  @Field()
  @MinLength(1, { message: "Le date doit faire au moins un caractère de long." })
  date: string;

  @Field()
  @Min(1, { message: "Le poids de la dépense doit avoir au moins un chiffre." })
  weight: number;
}

@ArgsType()
class UpdateSpendingArgs extends CreateSpendingArgs {
  @Field(() => ID)
  @IsUUID()
  id: string;
}

export { CreateSpendingArgs, UpdateSpendingArgs };
