import { ResCategoryData } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogData } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResStoryBlogData } from '@/modules/interfaces/response/storyDetail/storyBlogs';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly storyBlog: ResStoryBlogData;
  readonly categories: ResCategoryData;
  readonly favoriteBlog: ResFavoriteBlogData;
}

/**
 * GraphQLのレスポンス: トップページ
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
