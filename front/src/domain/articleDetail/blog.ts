/**
 * 記事詳細
 */
export interface DomainArticleDetailBlog {
  /** ID */
  readonly id: number;
  /** タイトル */
  readonly title: string;
  /** 本文 */
  readonly text: string;
  /** 最終更新日 */
  readonly updatedAt: string;
  /** サムネイル */
  readonly thumbnail: string;
  /** カテゴリID */
  readonly categoryId: number;
  /** カテゴリ名 */
  readonly categoryName: string;
}
