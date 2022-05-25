// お気に入りの記事
interface ResFavoriteBlogAttributeBlogAttributeThumbnailFormats {
  readonly thumbnail?: {
    readonly url: string;
  };
  readonly small?: {
    readonly url: string;
  };
}
interface ResFavoriteBlogAttributeBlogAttributeThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
      readonly formats: ResFavoriteBlogAttributeBlogAttributeThumbnailFormats;
    };
  };
}
interface ResFavoriteBlogAttributeBlogAttribute {
  readonly urlid: string;
  readonly mainTitle: string;
  readonly thumbnail: ResFavoriteBlogAttributeBlogAttributeThumbnail;
}

/**
 * お気に入りの記事詳細
 */
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

/**
 * お気に入りの記事一覧
 */
export interface ResFavoriteBlogData {
  readonly data: ResFavoriteBlog;
}
