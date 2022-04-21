// ストーリー記事一覧

interface ResStoryBlogAttributeThumbnailFormats {
  readonly thumbnail?: {
    readonly url: string;
  };
  readonly small?: {
    readonly url: string;
  };
}

interface ResStoryBlogAttributeThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
      readonly formats: ResStoryBlogAttributeThumbnailFormats;
    };
  };
}

interface ResRelatedStoryBlogAttribute {
  readonly title: string;
  readonly titleSub: string;
  readonly thumbnail: ResStoryBlogAttributeThumbnail;
}

/**
 * ストーリー記事詳細
 */
export interface ResRelatedStoryBlog {
  readonly id: number;
  readonly attributes: ResRelatedStoryBlogAttribute;
}

/**
 * ストーリー記事一覧
 */
export interface ResRelatedStoryBlogData {
  readonly data: ResRelatedStoryBlog[];
}
