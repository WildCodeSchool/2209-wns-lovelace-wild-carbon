import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Category from "../Category/Category.entity";
import CategoryRepository from "../Category/Category.repository";
import ArticleDb from "./Article.db";

import Article from "./Article.entity";

export default class ArticleRepository extends ArticleDb {
  static async initializeArticles(): Promise<void> {
  await this.clearRepository();

    const carCategory = (await CategoryRepository.getCategoryByName(
      "Voiture"
    )) as Category;

    const articleExemple = new Article(
      "La voiture éléctrique : quelles émissions ?",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      carCategory
    );

    await this.repository.save([articleExemple]);
  }

  static async getArticles(): Promise<Article[]> {
    return this.repository.find();
  }

  static async createArticle(
    title: string,
    description: string,
    categoryName: string
  ): Promise<Article> {
    const category = await CategoryRepository.getCategoryByName(categoryName);
    const newArticle = this.repository.create({
      title,
      description,
      category: category || undefined,
    });
    await this.repository.save(newArticle);
    return newArticle;
  }


  static async updateArticle(
    id: string,
    title: string,
    description: string,
  ): Promise<
    {
      title: string;
      description: string;
    } & Article
  > {
    const existingArticle = await this.repository.findOneBy({ id });
    if (!existingArticle) {
      throw Error("No existing article matching ID.");
    }
    return this.repository.save({
      id,
      title,
      description,
    });
  }

  static async deleteArticle(id: string): Promise<Article> {
    const existingArticle = await this.findArticleById(id);
    if (!existingArticle) {
      throw Error("No existing article matching ID.");
    }
    await this.repository.remove(existingArticle);
    existingArticle.id = id;
    return existingArticle;
  }
}
