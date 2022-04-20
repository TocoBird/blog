// 記事詳細
interface ResTocoBlogThumbnailFormats {
  readonly small?: {
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

/**
 * 記事
 */
export interface ResTocoBlogData {
  readonly data: ResTocoBlog;
}
