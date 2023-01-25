import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Category from "./Category.entity";
import SpendingRepository from "../Spending/Spending.repository";

export default class CategoryRepository {
  private static repository: Repository<Category>;
  static async initializeRepository() {
    this.repository = await getRepository(Category);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeCategories(): Promise<void> {
    await SpendingRepository.clearRepository();
    await this.repository.delete({});
    await this.repository.save({
      categoryName: "Avion",
    });
    await this.repository.save({
      categoryName: "Train",
    });
    await this.repository.save({
      categoryName: "Voiture",
    });
    await this.repository.save({
      categoryName: "Chauffage",
    });
  }

  static async getCategories(): Promise<Category[]> {
    return this.repository.find();
  }

  static async getCategoryByName(name: string): Promise<Category | null> {
    return this.repository.findOneBy({ categoryName: name });
  }


  static async getCategoryById(id: string): Promise<Category | null> {
    return this.repository.findOneBy({ id });
  }
}
