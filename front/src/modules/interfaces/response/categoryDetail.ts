// 記事詳細
interface ResTocoBlogThumbnailFormats {
  readonly small: {
    readonly url: string;
  };
}
interface ResTocoBlogThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
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

// カテゴリー
interface ResCategoryAttribute {
  readonly name: string;
}
export interface ResCategory {
  readonly id: number;
  readonly attributes: ResCategoryAttribute;
}
interface ResCategoryData {
  readonly data: ResCategory[];
}
interface ResStrapi {
  readonly tocoBlogs: ResTocoBlogData;
  readonly categories: ResCategoryData;
}

/**
 * GraphQLのレスポンス: Blog
 */
export interface Res {
  readonly strapi: ResStrapi;
}
