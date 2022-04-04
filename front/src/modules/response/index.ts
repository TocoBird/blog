// 記事詳細
interface ResTocoBlogThumbnail {
  readonly data: {
    readonly attributes: { readonly url: string };
  };
}
interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly mainText: string;
  readonly thumbnail: ResTocoBlogThumbnail;
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
