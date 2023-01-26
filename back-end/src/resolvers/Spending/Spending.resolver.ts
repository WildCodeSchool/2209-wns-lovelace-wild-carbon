import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Category from "../../models/Category/Category.entity";

import Spending from "../../models/Spending/Spending.entity";
import SpendingRepository from "../../models/Spending/Spending.repository";
import { CreateSpendingArgs, UpdateSpendingArgs } from "./Spending.input";

@Resolver(Spending)
export default class SpendingResolver {
  @Query(() => [Spending])
  spendings(): Promise<Spending[]> {
    return SpendingRepository.getSpendings();
  }

  @Mutation(() => Spending)
  createSpending(
    @Args() { title, date, weight, categoryName }: CreateSpendingArgs
  ): Promise<Spending> {
    return SpendingRepository.createSpending(title, date, weight, categoryName);
  }

  @Mutation(() => Spending)
  updateSpending(
    @Args() { id, title, date, weight }: UpdateSpendingArgs
  ): Promise<Spending> {
    return SpendingRepository.updateSpending(id, title, date, weight);
  }

  @Mutation(() => Spending)
  deleteSpending(@Arg("id") id: string): Promise<Spending> {
    return SpendingRepository.deleteSpending(id);
  }
}
