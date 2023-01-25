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

    const spendingExemple = new Spending(
      "Voyage Paris - Amsterdam",
      "15-06-2022",
      980,
      trainCategory
    );

    await this.repository.save([spendingExemple]);
  }

  static async getSpending(): Promise<Spending[]> {
    return this.repository.find();
  }

  static async createSpending(
    title: string,
    date: string,
    weight: number,
    categoryName: string
  ): Promise<Spending> {
    const category = await CategoryRepository.getCategoryByName(categoryName);
    const newSpending = this.repository.create({
      title,
      date,
      weight,
      category: category || undefined,
    });
    await this.repository.save(newSpending);
    return newSpending;
  }

  static async updateSpending(
    id: string,
    title: string,
    date: string,
    weight: number
  ): Promise<
    {
      title: string;
      date: string;
      weight: number;
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

  static async addCategoryToSpending(
    spendingId: string,
    categoryId: string
  ): Promise<Spending> {
    const spending = await this.findSpendingById(spendingId);
    if (!spending) {
      throw Error("No existing spending matching ID.");
    }
    const category = await CategoryRepository.getCategoryById(categoryId);
    if (!category) {
      throw Error("No existing category matching ID.");
    }
    spending.category = category;
    return this.repository.save(spending);
  }
}
