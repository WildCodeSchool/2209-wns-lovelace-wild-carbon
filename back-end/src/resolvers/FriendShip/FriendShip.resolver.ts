import { Resolver, Query, Mutation, Arg, Ctx, Authorized } from 'type-graphql';
import Friendship from '../../models/Friendship/FriendShip.entity';
import AppUser from '../../models/AppUser/AppUser.entity';
import FriendshipRepository from '../../models/Friendship/Friendship.repository';
import { GlobalContext } from '../..';

@Resolver()
export default class FriendshipResolver {
  private friendshipRepository = FriendshipRepository;
  @Query(() => [Friendship])
  async getFriendshipRequests(
    @Ctx() context: GlobalContext
  ): Promise<Friendship[]> {
    const user = context.user as AppUser;
    if (!user) {
      throw new Error('Utilisateur non authentifié');
    }
    const friendshipRequests =
      await this.friendshipRepository.getFriendshipRequests(user);
    return friendshipRequests;
  }

  @Query(() => [Friendship])
  async getFriendshipList(
    @Ctx() context: GlobalContext
  ): Promise<Friendship[]> {
    const friendsRequestList = this.friendshipRepository.getFriendshipList(
      context.user as AppUser
    );
    if ((await friendsRequestList).length === 0) {
      throw new Error('Aucun amis dans la lsite');
    }
    return friendsRequestList;
  }

  @Authorized()
  @Mutation(() => Friendship)
  async sendFriendshipRequest(
    @Arg('invitedUserEmail') invitedUserEmail: string,
    @Ctx() context: GlobalContext
  ): Promise<Friendship> {
    const friendshipRequest =
      await this.friendshipRepository.sendFriendshipRequestByEmail(
        context.user as AppUser,
        invitedUserEmail
      );
    return friendshipRequest;
  }

  @Mutation(() => Friendship)
  async acceptFriendshipRequest(
    @Arg('friendshipId') friendshipId: string
  ): Promise<Friendship> {
    return FriendshipRepository.acceptFriendshipRequest(friendshipId);
  }

  @Mutation(() => Boolean)
  async declineFriendshipRequest(
    @Arg('friendshipId') friendshipId: string
  ): Promise<boolean> {
    await FriendshipRepository.declineFriendshipRequest(friendshipId);
    return true;
  }
}
