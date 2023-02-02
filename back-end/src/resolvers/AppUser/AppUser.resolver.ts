import {
  Args,
  Arg,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import AppUser from '../../models/AppUser/AppUser.entity';
import AppUserRepository from '../../models/AppUser/AppUser.repository';
import { SignInArgs, UserCreationArgs } from './AppUser.input';
import { setSessionIdInCookie } from '../../http-utils';
import { GlobalContext } from '../..';

@Resolver(AppUser)
export default class AppUserResolver {
  @Query(() => [AppUser])
  getUsers(): Promise<AppUser[]> {
    return AppUserRepository.getUsers();
  }

  @Query(() => AppUser)
  getUserById(@Arg('id') id: string): Promise<AppUser | null> {
    return AppUserRepository.getUserById(id);
  }

  @Mutation(() => AppUser)
  createUser(
    @Args()
    { firstName, lastName, email, password }: UserCreationArgs
  ): Promise<AppUser> {
    return AppUserRepository.createUser(firstName, lastName, email, password);
  }

  @Mutation(() => AppUser)
  async signIn(
    @Args() { email, password }: SignInArgs,
    @Ctx() context: GlobalContext
  ): Promise<AppUser> {
    const { user, session } = await AppUserRepository.signIn(email, password);
    setSessionIdInCookie(context, session.id);
    return user;
  }
  @Mutation(() => AppUser)
  async signOut(@Arg('id') id: string): Promise<AppUser> {
    return AppUserRepository.signOut(id);
  }

  @Authorized()
  @Query(() => AppUser)
  async myProfile(@Ctx() context: GlobalContext): Promise<AppUser> {
    return context.user as AppUser;
  }
}
