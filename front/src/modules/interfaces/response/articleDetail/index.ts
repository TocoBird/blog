import { ResCategoryData } from '@/modules/interfaces/response/articleDetail/categories';
import { ResFavoriteBlogData } from '@/modules/interfaces/response/articleDetail/favoriteBlog';
import { ResStoryBlogData } from '@/modules/interfaces/response/articleDetail/storyBlogs';
import { ResTocoBlogData } from '@/modules/interfaces/response/articleDetail/tocoBlog';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly tocoBlog: ResTocoBlogData;
  readonly categories: ResCategoryData;
  readonly favoriteBlog: ResFavoriteBlogData;
  readonly storyBlogs: ResStoryBlogData;
}

/**
 * GraphQLのレスポンス: Blog詳細
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
