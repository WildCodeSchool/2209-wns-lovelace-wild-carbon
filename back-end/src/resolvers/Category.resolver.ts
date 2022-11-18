import { Args, Arg, Mutation, Query, Resolver } from "type-graphql";
import Category from "../models/Category/Category.entity";
import CategoryRepository from "../models/Category/Category.repository";
import { CreateCategoriesArgs } from "./Category.input";

@Resolver(Category)
export default class CategoryResolver {
    @Query(() => [Category])
    categories(): Promise<Category[]> {
        return CategoryRepository.getCategory();
    }

    @Mutation(() => Category)
    createCategory(
        @Args() {name}: CreateCategoriesArgs): Promise<Category> {
        return CategoryRepository.createCategory(name)
        }

    @Mutation(() => Category)
    deleteCategory(
        @Arg("id") id: string): Promise<Category> {
          return CategoryRepository.deleteCategory(id);
        }
}