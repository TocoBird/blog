interface ResTocoBlogThumbnail {
  readonly data: {
    readonly attributes: { readonly url: string };
  };
}
interface ResTocoBlogCategory {
  readonly data: {
    readonly id: number;
    readonly attributes: { readonly name: string };
  };
}
interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly mainText: string;
  readonly updatedAt: Date;
  readonly thumbnail: ResTocoBlogThumbnail;
  readonly category: ResTocoBlogCategory;
}
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog;
}
interface ResStrapi {
  readonly tocoBlog: ResTocoBlogData;
}
/**
 * GraphQLのレスポンス: Blog
 */
export interface Res {
  readonly strapi: ResStrapi;
}
