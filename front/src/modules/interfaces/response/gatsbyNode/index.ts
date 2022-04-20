import { ResCategoryData } from '@/modules/interfaces/response/gatsbyNode/categories';
import { ResStoryBlogData } from '@/modules/interfaces/response/gatsbyNode/storyBlogs';
import { ResTocoBlogData } from '@/modules/interfaces/response/gatsbyNode/tocoBlogs';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly tocoBlogs: ResTocoBlogData;
  readonly categories: ResCategoryData;
  readonly storyBlogs: ResStoryBlogData;
}

/**
 * GraphQLのレスポンス: ページ生成
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
