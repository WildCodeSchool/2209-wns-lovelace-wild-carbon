import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import Article from "../../models/Article/Article.entity";
import ArticleRepository from "../../models/Article/Article.repository";

import { CreateArticleArgs, UpdateArticleArgs } from "./Article.input";

@Resolver(Article)
export default class ArticleResolver {
  @Query(() => [Article])
  articles(): Promise<Article[]> {
    return ArticleRepository.getArticles();
  }

  @Mutation(() => Article)
  createArticle(
    @Args() { title, description, categoryName }: CreateArticleArgs
  ): Promise<Article> {
    return ArticleRepository.createArticle(title, description, categoryName)
  }

  @Mutation(() => Article)
  updateArticle(
    @Args() {id, title, description}: UpdateArticleArgs) : Promise<Article> {
      return ArticleRepository.updateArticle(id, title, description)
    }


  @Mutation(() => Article)
  deleteArticle(@Arg("id") id: string): Promise<Article> {
    return ArticleRepository.deleteArticle(id);
  }

}
