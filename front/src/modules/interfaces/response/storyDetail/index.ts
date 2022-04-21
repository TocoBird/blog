import { ResCategoryData } from '@/modules/interfaces/response/storyDetail/categories';
import { ResFavoriteBlogData } from '@/modules/interfaces/response/storyDetail/favoriteBlog';
import { ResStoryBlogsData } from '@/modules/interfaces/response/storyDetail/relatedStoryBlog';
import { ResStoryBlogData } from '@/modules/interfaces/response/storyDetail/storyBlog';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly storyBlog: ResStoryBlogData;
  readonly categories: ResCategoryData;
  readonly favoriteBlog: ResFavoriteBlogData;
  readonly storyBlogs: ResStoryBlogsData;
}

/**
 * GraphQLのレスポンス: トップページ
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
