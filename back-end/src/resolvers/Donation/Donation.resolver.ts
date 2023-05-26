import { Args, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import DonationRepository from '../../models/Donation/Donation.repository';
import Donation from '../../models/Donation/Donation.entity';
import { GlobalContext } from '../..';
import AppUser from '../../models/AppUser/AppUser.entity';
import { CreateDonationArgs } from './Donation.input';

@Resolver(Donation)
export default class DonationResolver {
  @Query(() => [Donation])
  donations(): Promise<Donation[]> {
    return DonationRepository.getDonations();
  }

  @Authorized()
  @Mutation(() => Donation)
  createDonation(
    @Args() { amount }: CreateDonationArgs,
    @Ctx() context: GlobalContext
  ): Promise<Donation> {
    return DonationRepository.createDonation(amount, context.user as AppUser);
  }
}
