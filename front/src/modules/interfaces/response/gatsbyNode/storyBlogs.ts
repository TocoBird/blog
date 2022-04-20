/**
 * ストーリー記事詳細
 */
export interface ResStoryBlog {
  readonly id: number;
}

/**
 * ストーリー記事一覧
 */
export interface ResStoryBlogData {
  readonly data: ResStoryBlog[];
}
