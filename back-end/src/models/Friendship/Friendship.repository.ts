import { Repository } from 'typeorm';
import Friendship from './FriendShip.entity';
import { getRepository } from '../../database/utils';

export default class FriendshipRepository {
  private static repository: Repository<Friendship>;
  static async initializeRepository() {
    this.repository = await getRepository(Friendship);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}
