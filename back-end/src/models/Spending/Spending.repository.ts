import { Repository } from "typeorm";
import Spending from "./Spending.entity";
import { getRepository } from "../../database/utils";
import SpendingDb from "./Spending.db";

export default class SpendingRepository extends SpendingDb {
  static async initializeSpending(): Promise<void> {
    await this.clearRepository();
   
    const spendingExemple = new Spending("Voyage Paris - Amsterdam", "15-06-2022", 980);

    await this.repository.save([spendingExemple]);
  }

  static async getSpending(): Promise<Spending[]> {
    return this.repository.find();
  }

  static async createSpending(
    title: string,
    date: string,
    weight: number,
  ): Promise<Spending> {
    const newSpending = this.repository.create({ title, date, weight });
    await this.repository.save(newSpending);
    return newSpending;
  }

  static async updateSpending(
    id: string,
    title: string,
    date: string,
    weight: number,
  ): Promise<
    {
      title: string,
    date: string,
    weight: number,
    } & Spending
  > {
    const existingSpending = await this.repository.findOneBy({ id });
    if (!existingSpending) {
      throw Error("No existing Spending matching ID.");
    }
    return this.repository.save({
      id,
      title, 
      date, 
      weight,
    });
  }

  static async deleteSpending(id: string): Promise<Spending> {
    const existingSpending = await this.findSpendingById(id);
    if (!existingSpending) {
      throw Error("No existing Spending matching ID.");
    }
    await this.repository.remove(existingSpending);
    // resetting ID because existingSpending loses ID after calling remove
    existingSpending.id = id;
    return existingSpending;
  }
}
