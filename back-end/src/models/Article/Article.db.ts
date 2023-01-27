import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Article from "./Article.entity";

export default class ArticleDb {
  protected static repository: Repository<Article>;
  static async initializeRepository() {
    this.repository = await getRepository(Article);
  }

  protected static findArticleById(articleId: string) {
    return this.repository.findOneBy({ id: articleId });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}
