import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
// import Category from "./Category.entity";
// import SpendingRepository from "../Spending/Spending.repository";
import Article from "./Article.entity";
// import CategoryRepository from "../Category/Category.repository";

export default class ArticleRepository {
  private static repository: Repository<Article>;
  static async initializeRepository() {
    this.repository = await getRepository(Article);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeArticles(): Promise<void> {
    await ArticleRepository.clearRepository();
    await this.repository.delete({});
    await this.repository.save({
      title: "La voiture éléctrique : quelles émissions ?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    });
  }

  // static async getCategoryByName(name: string): Promise<Category | null> {
  //   return this.repository.findOneBy({ title: title });
  // }
}
