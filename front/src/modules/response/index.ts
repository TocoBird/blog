interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly mainText: string;
}
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}
interface ResStrapi {
  readonly tocoBlogs: ResTocoBlogData;
}
/**
 * GraphQLのレスポンス: Blog
 */
export interface Res {
  readonly strapi: ResStrapi;
}
