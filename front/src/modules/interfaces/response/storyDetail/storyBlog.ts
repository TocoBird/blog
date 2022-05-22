// ストーリー記事詳細

interface ResStoryBlogAttributeTocoBlogAttributeThumbnailFormats {
  readonly thumbnail?: {
    readonly url: string;
  };
  readonly small?: {
    readonly url: string;
  };
}

interface ResStoryBlogAttributeTocoBlogAttributeThumbnail {
  readonly attributes: {
    readonly url: string;
    readonly formats: ResStoryBlogAttributeTocoBlogAttributeThumbnailFormats;
  };
}

interface ResStoryBlogAttributeTocoBlogAttributeThumbnailData {
  readonly data: ResStoryBlogAttributeTocoBlogAttributeThumbnail;
}

interface ResStoryBlogAttributeTocoBlogAttribute {
  readonly id: number;
  readonly attributes: {
    readonly mainTitle: string;
    readonly thumbnail: ResStoryBlogAttributeTocoBlogAttributeThumbnailData;
  };
}
interface ResStoryBlogAttributeTocoBlogAttributeData {
  readonly data: ResStoryBlogAttributeTocoBlogAttribute;
}
interface ResStoryBlogAttributeTocoBlog {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly toco_blog: ResStoryBlogAttributeTocoBlogAttributeData;
}

interface ResStoryBlogAttributeThumbnail {
  readonly data: {
    readonly attributes: {
      readonly url: string;
    };
  };
}

interface ResStoryBlogAttribute {
  readonly title: string;
  readonly titleSub: string;
  readonly thumbnail: ResStoryBlogAttributeThumbnail;
  readonly textIntroduction: string;
  readonly textConclusion: string;
  readonly toco_blogs: ResStoryBlogAttributeTocoBlog[];
  readonly updatedAt: Date;
  readonly createdAt: Date;
}

/**
 * ストーリー記事詳細
 */
export interface ResStoryBlog {
  readonly attributes: ResStoryBlogAttribute;
}

/**
 * ストーリー記事一覧
 */
export interface ResStoryBlogData {
  readonly data: ResStoryBlog;
}
