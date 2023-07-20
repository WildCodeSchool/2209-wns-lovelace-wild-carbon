import { IsDate, IsUUID, Min, MinLength } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class CreateSpendingArgs {
  @Field()
  @MinLength(1, {
    message: 'Le titre doit faire au moins un caractère de long.',
  })
  title: string;

  @Field()
  @IsDate()
  date: Date;

  @Field()
  @Min(1, { message: "L'unité calculée doit à avoir au moins un chiffre." })
  unit: number;

  @Field()
  @Min(1, { message: 'Le poids de la dépense doit avoir au moins un chiffre.' })
  weight: number;

  @Field()
  @MinLength(1, {
    message: 'La catégorie doit faire au moins un caractère de long.',
  })
  categoryName: string;
}

@ArgsType()
class UpdateSpendingArgs extends CreateSpendingArgs {
  @Field(() => ID)
  @IsUUID()
  id: string;
}

export { CreateSpendingArgs, UpdateSpendingArgs };
