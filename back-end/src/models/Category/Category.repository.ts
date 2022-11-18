import { Repository } from "typeorm";
import Category from "./Category.entity";
import { getRepository } from "../../database/utils";
import CategoryDb from "./Category.db";

export default class CategoryRepository extends CategoryDb {
  static async initializeCategories(): Promise<void> {
    await this.clearRepository();

    const plane = new Category("Avion");
    const car = new Category("Voiture");
    const train = new Category("Train");
    const heater = new Category("Chauffage");

    await this.repository.save([plane, car, train, heater]);
  }

  static async getCategory(): Promise<Category[]> {
    return this.repository.find();
  }

  static async createCategory(
    name: string,
  ): Promise<Category> {
    const newCategory = this.repository.create({ name });
    await this.repository.save(newCategory);
    return newCategory;
  }

  static async deleteCategory(id: string): Promise<Category> {
    const existingCategory = await this.findCategoryById(id);
    if (!existingCategory) {
      throw Error("No existing Category matching ID.");
    }
    await this.repository.remove(existingCategory);
    // resetting ID because existingWilder loses ID after calling remove
    existingCategory.id = id;
    return existingCategory;
  }
}
