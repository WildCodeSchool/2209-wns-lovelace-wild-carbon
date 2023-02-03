import { Repository } from "typeorm";
import Spending from "./Spending.entity";
import { getRepository } from "../../database/utils";
import SpendingDb from "./Spending.db";
import CategoryRepository from "../Category/Category.repository";
import Category from "../Category/Category.entity";

export default class SpendingRepository extends SpendingDb {
  static async initializeSpending(): Promise<void> {
    await this.clearRepository();
    const trainCategory = (await CategoryRepository.getCategoryByName(
      "Train"
    )) as Category;

    const dateExemple = new Date("2022-06-12");

    const spendingExemple = new Spending(
      "Voyage Paris - Amsterdam",
      dateExemple,
      1000,
      200,
      trainCategory
    );

    await this.repository.save([spendingExemple]);
  }

  static async getSpendings(): Promise<Spending[]> {
    return this.repository.find();
  }

  static async createSpending(
    title: string,
    date: Date,
    unit: number,
    weight: number,
    categoryName: string
  ): Promise<Spending> {
    const category = await CategoryRepository.getCategoryByName(categoryName);
    const newSpending = this.repository.create({
      title,
      date,
      unit,
      weight,
      category: category || undefined,
    });
    await this.repository.save(newSpending);
    return newSpending;
  }

  static async updateSpending(
    id: string,
    title: string,
    date: Date,
    unit: number,
    weight: number
  ): Promise<
    {
      title: string;
      date: Date;
      unit: number;
      weight: number;
    } & Spending
  > {
    const existingSpending = await this.repository.findOneBy({ id });
    if (!existingSpending) {
      throw Error("No existing spending matching ID.");
    }
    return this.repository.save({
      id,
      title,
      date,
      unit,
      weight,
    });
  }

  static async deleteSpending(id: string): Promise<Spending> {
    const existingSpending = await this.findSpendingById(id);
    if (!existingSpending) {
      throw Error("No existing spending matching ID.");
    }
    await this.repository.remove(existingSpending);
    // resetting ID because existingSpending loses ID after calling remove
    existingSpending.id = id;
    return existingSpending;
  }
}
