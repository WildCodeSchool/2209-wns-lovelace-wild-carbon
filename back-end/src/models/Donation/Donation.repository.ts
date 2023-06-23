import AppUser from '../AppUser/AppUser.entity';
import DonationDb from './Donation.db';
import Donation from './Donation.entity';

export default class DonationRepository extends DonationDb {
  static async initializeDonation(): Promise<void> {
    await this.clearRepository();
  }

  static async getDonations(): Promise<Donation[]> {
    return this.repository.find({
      relations: { user: true },
    });
  }

  static async getDonationsByUserId(user: AppUser): Promise<Donation[]> {
    return this.repository.find({
      where: { user: { id: user.id } },
      relations: { user: true },
    });
  }

  static async getTotalDonations(): Promise<number | undefined> {
    const result = await this.repository
      .createQueryBuilder('donation')
      .select('SUM(donation.amount)')
      .getRawOne();
    return result.sum;
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
