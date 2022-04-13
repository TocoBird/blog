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
interface ResCategoryAttributeRelatedBlogAttribute {
  readonly mainTitle: string;
  readonly thumbnail: ResTocoBlogThumbnail;
}
export interface ResCategoryAttributeRelatedBlog {
  readonly id: number;
  readonly attributes: ResCategoryAttributeRelatedBlogAttribute;
}
interface ResCategoryAttributeRelatedBlogData {
  readonly data: ResCategoryAttributeRelatedBlog[];
}
interface ResTocoBlogCategory {
  readonly data: {
    readonly id: number;
    readonly attributes: {
      readonly name: string;
      readonly toco_blogs: ResCategoryAttributeRelatedBlogData;
    };
  };
}
interface ResTocoBlogAttributeThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
    };
  };
}
interface ResTocoBlogAttribute {
  readonly mainTitle: string;
  readonly mainText: string;
  readonly updatedAt: Date;
  readonly thumbnail: ResTocoBlogAttributeThumbnail;
  readonly category: ResTocoBlogCategory;
}
export interface ResTocoBlog {
  readonly id: number;
  readonly attributes: ResTocoBlogAttribute;
}
interface ResTocoBlogData {
  readonly data: ResTocoBlog;
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

// お気に入りの記事
interface ResFavoriteBlogAttributeBlogAttributeThumbnailFormats {
  readonly thumbnail: {
    readonly url: string;
  };
}
interface ResFavoriteBlogAttributeBlogAttributeThumbnail {
  readonly data: {
    readonly attributes: {
      readonly formats: ResFavoriteBlogAttributeBlogAttributeThumbnailFormats;
    };
  };
}
interface ResFavoriteBlogAttributeBlogAttribute {
  readonly mainTitle: string;
  readonly thumbnail: ResFavoriteBlogAttributeBlogAttributeThumbnail;
}
export interface ResFavoriteBlogAttributeBlog {
  readonly id: number;
  readonly attributes: ResFavoriteBlogAttributeBlogAttribute;
}
interface ResFavoriteBlogAttributeBlogData {
  readonly data: ResFavoriteBlogAttributeBlog[];
}
interface ResFavoriteBlogAttribute {
  readonly toco_blogs: ResFavoriteBlogAttributeBlogData;
}
interface ResFavoriteBlog {
  readonly attributes: ResFavoriteBlogAttribute;
}
interface ResFavoriteBlogData {
  readonly data: ResFavoriteBlog;
}

// 取得データ一覧
interface ResStrAPI {
  readonly tocoBlog: ResTocoBlogData;
  readonly categories: ResCategoryData;
  readonly favoriteBlog: ResFavoriteBlogData;
}

/**
 * GraphQLのレスポンス: Blog
 */
export interface Res {
  readonly strapi: ResStrAPI;
}
