import AppUser from '../AppUser/AppUser.entity';
import DonationDb from './Donation.db';
import Donation from './Donation.entity';

export default class DonationRepository extends DonationDb {
  static async getDonations(): Promise<Donation[]> {
    return this.repository.find({ relations: { user: true } });
  }

  static async createDonation(
    amount: number,
    user: AppUser
  ): Promise<Donation> {
    const newDonation = this.repository.create({
      amount,
      user,
    });
    await this.repository.save(newDonation);
    return newDonation;
  }
}
