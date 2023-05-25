import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';

// import AppUser from '../../models/AppUser/AppUser.entity';
import DonationRepository from '../../models/Donation/Donation.repository';
import Donation from '../../models/Donation/Donation.entity';
import { GlobalContext } from '../..';
import AppUser from '../../models/AppUser/AppUser.entity';

@Resolver(Donation)
export default class DonationResolver {
  @Query(() => [Donation])
  donations(): Promise<Donation[]> {
    return DonationRepository.getDonations();
  }

  @Authorized()
  @Mutation(() => Donation)
  createDonation(
    @Arg('amount') amount: number,
    @Ctx() context: GlobalContext
  ): Promise<Donation> {
    return DonationRepository.createDonation(amount, context.user as AppUser);
  }
}
