import { ResStoryBlogData } from '@/modules/interfaces/response/storyDetail/storyBlogs';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly storyBlog: ResStoryBlogData;
}

/**
 * GraphQLのレスポンス: トップページ
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
