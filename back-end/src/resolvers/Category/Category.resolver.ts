import { Query, Resolver } from 'type-graphql';
import Category from '../../models/Category/Category.entity';
import CategoryRepository from '../../models/Category/Category.repository';

@Resolver(Category)
export default class CategoryResolver {
  @Query(() => [Category])
  categories(): Promise<Category[]> {
    return CategoryRepository.getCategories();
  }
}
