import { ResCategoryData } from '@/modules/interfaces/response/home/categories';

/**
 * 取得データ一覧
 */
interface ResStrAPI {
  readonly categories: ResCategoryData;
}

/**
 * GraphQLのレスポンス: トップページ
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
