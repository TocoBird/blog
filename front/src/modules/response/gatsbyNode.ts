interface ResTocoBlog {
  readonly id: number;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}
interface ResStrapi {
  readonly tocoBlogs: ResTocoBlogData;
}
/**
 * GraphQLのレスポンス: BlogID一覧
 */
export interface Res {
  readonly strapi: ResStrapi;
}
