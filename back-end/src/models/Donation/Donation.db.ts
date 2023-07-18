import { Repository } from 'typeorm';
import { getRepository } from '../../database/utils';
import Donation from './Donation.entity';

export default class DonationDb {
  protected static repository: Repository<Donation>;
  static async initializeRepository() {
    this.repository = await getRepository(Donation);
  }

  protected static findDonationById(donationId: string) {
    return this.repository.findOneBy({ id: donationId });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}
