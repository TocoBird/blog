import { ResCategoryData } from '@/modules/interfaces/response/home/categories';
import { ResStoryBlogData } from '@/modules/interfaces/response/home/storyBlogs';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly categories: ResCategoryData;
  readonly storyBlogs: ResStoryBlogData;
}

/**
 * GraphQLのレスポンス: トップページ
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
