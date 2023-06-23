import { Repository } from 'typeorm';
import Friendship from './FriendShip.entity';
import { getRepository } from '../../database/utils';
import AppUserRepository from '../AppUser/AppUser.repository';
import AppUser from '../AppUser/AppUser.entity';

export default class FriendshipRepository {
  private static repository: Repository<Friendship>;
  static async initializeRepository() {
    this.repository = await getRepository(Friendship);
  }

  static async getFriendshipRequests(): Promise<Friendship[]> {
    const friendships = await this.repository.find({
      relations: ['invitingUser', 'invitedUsers'],
    });
    const friendshipRequests = friendships.filter(
      (friendship) => friendship.acceptInvitation === false
    );
    return friendshipRequests;
  }

  static async getFriendshipList(): Promise<Friendship[]> {
    const friendships = await this.repository.find({
      relations: ['invitingUser', 'invitedUsers'],
    });
    const friendshipRequests = friendships.filter(
      (friendship) => friendship.acceptInvitation === true
    );
    return friendshipRequests;
  }

  static async sendFriendshipRequestByEmail(
    invitingUser: AppUser,
    invitedUserEmail: string
  ): Promise<Friendship> {
    const invitedUser = await AppUserRepository.getUserByEmail(
      invitedUserEmail
    );

    if (!invitingUser || !invitedUser) {
      throw new Error('Utilisateur Introuvable');
    }

    const friendshipRequest = new Friendship(invitedUser, invitingUser);

    const existingFriendship = await this.repository.findOne({
      where: {
        invitingUser: { id: invitingUser.id },
        invitedUsers: { id: invitedUser.id },
      },
    });
    if (existingFriendship) {
      throw new Error("La demande d'amitié existe déjà");
    }

    return this.repository.save(friendshipRequest);
  }

  static async acceptFriendshipRequest(
    friendshipId: string
  ): Promise<Friendship> {
    const friendship = await this.repository.findOne({
      where: { id: friendshipId },
      relations: ['invitingUser', 'invitedUsers'],
    });

    if (!friendship) {
      throw new Error("Demande d'amitié introuvable");
    }

    friendship.acceptInvitation = true;
    return this.repository.save(friendship);
  }

  static async declineFriendshipRequest(friendshipId: string): Promise<void> {
    const friendship = await this.repository.findOne({
      where: { id: friendshipId },
    });

    if (!friendship) {
      throw new Error("Demande d'amitié introuvable");
    }

    friendship.acceptInvitation = false;
    await this.repository.remove(friendship);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}
