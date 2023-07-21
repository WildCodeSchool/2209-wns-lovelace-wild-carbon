import { Min } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class CreateDonationArgs {
  @Field()
  @Min(1, {
    message:
      'Le montant doit à avoir au moins un chiffre et être supérieur à 1€.',
  })
  amount: number;
}

export { CreateDonationArgs };
