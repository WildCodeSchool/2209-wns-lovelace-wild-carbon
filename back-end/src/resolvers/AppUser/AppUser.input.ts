import { IsEmail, Matches, MaxLength, MinLength } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

const passwordRegExp = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
);

@ArgsType()
export class SignInArgs {
  @Field()
  @IsEmail()
  @MaxLength(255, {
    message: "L'adresse email doit faire au plus 255 caractères de long.",
  })
  email: string;

  @Field()
  @Matches(passwordRegExp, {
    message:
      'Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.',
  })
  password: string;
}

@ArgsType()
export class UserCreationArgs {
  @Field()
  @MinLength(1, {
    message: 'Le prénom doit faire au moins un caractère de long.',
  })
  firstName: string;

  @Field()
  @MinLength(1, { message: 'Le nom doit faire au moins un caractère de long.' })
  lastName: string;

  @Field()
  @IsEmail()
  @MaxLength(255, {
    message: "L'adresse email doit faire au plus 255 caractères de long.",
  })
  email: string;

  @Field()
  @Matches(passwordRegExp, {
    message:
      'Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.',
  })
  password: string;
}
