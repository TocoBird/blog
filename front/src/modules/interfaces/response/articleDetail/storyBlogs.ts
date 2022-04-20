// ストーリー記事

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

interface ResStoryBlogAttribute {
  readonly title: string;
  readonly titleSub: string;
  readonly thumbnail: ResStoryBlogAttributeThumbnail;
}

/**
 * ストーリー記事詳細
 */
export interface ResStoryBlog {
  readonly id: number;
  readonly attributes: ResStoryBlogAttribute;
}

/**
 * ストーリー記事一覧
 */
export interface ResStoryBlogData {
  readonly data: ResStoryBlog[];
}
