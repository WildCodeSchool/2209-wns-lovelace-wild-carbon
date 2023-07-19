import AppUserDb from './AppUser.db';
import AppUser from './AppUser.entity';
import { hashSync, compareSync } from 'bcryptjs';
import SessionRepository from './Session.repository';
import Session from './Session.entity';

export const INVALID_CREDENTIALS_ERROR_MESSAGE = 'Identifiants incorrects.';

export default class AppUserRepository extends AppUserDb {
  static createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<AppUser> {
    const user = new AppUser(email, hashSync(password), firstName, lastName);
    return this.saveUser(user);
  }

  static getUserById(id: string): Promise<AppUser | null> {
    const user = this.repository.findOneBy({ id });

    if (!user) {
      throw Error('Aucun utilisateur de correspond à cet id.');
    }

    return user;
  }

  static getUserByEmail(email: string): Promise<AppUser | null> {
    const user = this.repository.findOneBy({ email });

    if (!user) {
      throw Error('Aucun utilisateur de correspond à cet email.');
    }

    return user;
  }

  static async signIn(
    email: string,
    password: string
  ): Promise<{ user: AppUser; session: Session }> {
    const user = await this.findByEmail(email);

    if (!user || !compareSync(password, user.hashedPassword)) {
      throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE);
    }
    const session = await SessionRepository.createSession(user);
    return { user, session };
  }

  static async signOut(id: string): Promise<AppUser> {
    const user = await this.getUserById(id);

    if (!user) {
      throw Error('Aucun utilisateur de correspond à cet id.');
    }
    await SessionRepository.deleteSession(user);

    return user;
  }

  static getUsers(): Promise<AppUser[]> {
    return this.repository.find();
  }

  static async findBySessionId(sessionId: string): Promise<AppUser | null> {
    const session = await SessionRepository.findById(sessionId);
    if (!session) {
      return null;
    }
    return session.user;
  }
}
