/**
 * どめいん
 */
export interface DomainBlogDetail {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly updatedAt: string;
  readonly thumbnail: string;
  readonly categoryId: number;
  readonly categoryName: string;
}

/**
 * カテゴリ
 */
export interface DomainCategory {
  readonly id: number;
  readonly name: string;
}

/**
 * カテゴリ
 */
export interface DomainFavoriteBlog {
  readonly id: number;
  readonly title: string;
  readonly thumbnail: string;
}
