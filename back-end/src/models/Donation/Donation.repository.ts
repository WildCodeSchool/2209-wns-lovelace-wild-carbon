import DonationDb from './Donation.db';
import Donation from './Donation.entity';

export default class DonationRepository extends DonationDb {
  static async getDonations(): Promise<Donation[]> {
    return this.repository.find();
  }

  static async createDonation(amount: number): Promise<Donation> {
    const newDonation = this.repository.create({
      amount,
    });
    await this.repository.save(newDonation);
    return newDonation;
  }
}
