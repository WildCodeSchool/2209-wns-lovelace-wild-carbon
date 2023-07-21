import { IsUUID, MinLength } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class CreateArticleArgs {
  @Field()
  @MinLength(1, {
    message: 'Le titre doit faire au moins un caractère de long.',
  })
  title: string;

  @Field()
  @MinLength(1, {
    message: 'Le date doit faire au moins un caractère de long.',
  })
  description: string;

  @Field()
  @MinLength(1, {
    message: 'La catégorie doit faire au moins un caractère de long.',
  })
  categoryName: string;
}

@ArgsType()
class UpdateArticleArgs extends CreateArticleArgs {
  @Field(() => ID)
  @IsUUID()
  id: string;
}

export { CreateArticleArgs, UpdateArticleArgs };
