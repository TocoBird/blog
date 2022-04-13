// 記事詳細
interface ResTocoBlogThumbnailFormats {
  readonly small: {
    readonly url: string;
  };
}
interface ResTocoBlogThumbnail {
  readonly data: {
    readonly attributes: {
      readonly formats: ResTocoBlogThumbnailFormats;
    };
  };
}
interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly thumbnail: ResTocoBlogThumbnail;
}
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog[];
}
interface ResCategoryAttribute {
  readonly name: string;
  readonly toco_blogs: ResTocoBlogData;
}
export interface ResCategory {
  readonly id: number;
  readonly attributes: ResCategoryAttribute;
}
interface ResCategoryData {
  readonly data: ResCategory[];
}
interface ResStrapi {
  readonly categories: ResCategoryData;
}
/**
 * GraphQLのレスポンス: Blog
 */
export interface Res {
  readonly strapi: ResStrapi;
}
