import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Spending from "./Spending.entity";

export default class SpendingDb {
  protected static repository: Repository<Spending>;
  static async initializeRepository() {
    this.repository = await getRepository(Spending);
  }

  protected static findSpendingById(spendingId: string) {
    return this.repository.findOneBy({ id: spendingId });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}
