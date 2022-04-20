export interface StoryBlogId {
  /** 記事ID */
  readonly id: number;
}
export interface StoryBlogTitle {
  /** 記事タイトル */
  readonly title: string;
}
export interface StoryBlogTitleSub {
  /** 記事サブタイトル */
  readonly titleSub: string;
}
export interface StoryBlogTextIntroduction {
  /** 記事導入 */
  readonly textIntroduction: string;
}
export interface StoryBlogTextConclusion {
  /** 記事結論 */
  readonly textConclusion: string;
}
export interface StoryBlogThumbnail {
  /** サムネイル */
  readonly thumbnail: string;
}
export interface StoryBlogUpdatedAt {
  /** 最終更新日 */
  readonly updatedAt: string;
}
