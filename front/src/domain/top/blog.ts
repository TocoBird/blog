/**
 * カテゴリごとの記事
 */
export interface DomainTopCategory {
  /** ID */
  readonly id: number;
  /** カテゴリ名 */
  readonly name: string;
  /** そのカテゴリの記事一覧 */
  readonly blogs: DomainTopCategoryBlog[];
}

/**
 * カテゴリごとの記事詳細
 */
export interface DomainTopCategoryBlog {
  /** ID */
  readonly id: number;
  /** 記事タイトル */
  readonly title: string;
  /** サムネイル */
  readonly thumbnail: string;
}
