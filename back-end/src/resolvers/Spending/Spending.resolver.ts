import {
  Arg,
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import Category from '../../models/Category/Category.entity';

import Spending from '../../models/Spending/Spending.entity';
import SpendingRepository from '../../models/Spending/Spending.repository';
import { CreateSpendingArgs, UpdateSpendingArgs } from './Spending.input';
import { GlobalContext } from '../..';
import AppUser from '../../models/AppUser/AppUser.entity';

@Resolver(Spending)
export default class SpendingResolver {
  @Authorized()
  @Query(() => [Spending])
  spendings(@Ctx() context: GlobalContext): Promise<Spending[]> {
    return SpendingRepository.getSpendings(context.user as AppUser);
  }

  @Authorized()
  @Mutation(() => Spending)
  createSpending(
    @Args() { title, date, unit, weight, categoryName }: CreateSpendingArgs,
    @Ctx() context: GlobalContext
  ): Promise<Spending> {
    console.log('dateee', date);
    return SpendingRepository.createSpending(
      title,
      date,
      unit,
      weight,
      categoryName,
      context.user as AppUser
    );
  }

  @Mutation(() => Spending)
  updateSpending(
    @Args() { id, title, date, unit, weight }: UpdateSpendingArgs
  ): Promise<Spending> {
    return SpendingRepository.updateSpending(id, title, date, unit, weight);
  }

  @Mutation(() => Spending)
  deleteSpending(@Arg('id') id: string): Promise<Spending> {
    return SpendingRepository.deleteSpending(id);
  }
}
