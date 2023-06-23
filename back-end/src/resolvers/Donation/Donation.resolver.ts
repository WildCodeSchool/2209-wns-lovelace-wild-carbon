import {
  Args,
  Authorized,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';

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
  @Query(() => [Donation])
  donationsByUserId(@Ctx() context: GlobalContext): Promise<Donation[]> {
    return DonationRepository.getDonationsByUserId(context.user as AppUser);
  }

  @Query(() => Int)
  getTotalDonations(): Promise<number | undefined> {
    return DonationRepository.getTotalDonations();
  }

  // @Authorized()
  // @Query(() => [Donation])
  // getListOfTotalDonations(@Ctx() context: GlobalContext): Promise<Donation[]> {
  //   return DonationRepository.getListOfTotalDonations(context.user as AppUser);
  // }

  @Authorized()
  @Mutation(() => Donation)
  createDonation(
    @Args() { amount }: CreateDonationArgs,
    @Ctx() context: GlobalContext
  ): Promise<Donation> {
    return DonationRepository.createDonation(amount, context.user as AppUser);
  }
}
