export interface ResTocoBlog {
  readonly id: number;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}

// カテゴリー
export interface ResCategory {
  readonly id: number;
}
interface ResCategoryData {
  readonly data: ResCategory[];
}
interface ResStrapi {
  readonly tocoBlogs: ResTocoBlogData;
  readonly categories: ResCategoryData;
}
/**
 * GraphQLのレスポンス: BlogID一覧
 */
export interface Res {
  readonly strapi: ResStrapi;
}
