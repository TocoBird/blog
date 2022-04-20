import { ResCategoryData } from '@/modules/interfaces/response/categoryDetail/categories';
import { ResTocoBlogData } from '@/modules/interfaces/response/categoryDetail/tocoBlogs';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly tocoBlogs: ResTocoBlogData;
  readonly categories: ResCategoryData;
}

/**
 * GraphQLのレスポンス: カテゴリ詳細
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
