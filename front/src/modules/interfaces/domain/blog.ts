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
export interface DomainCategory {
  readonly id: number;
  readonly name: string;
}

export interface DomainCategoryBlog {
  readonly id: number;
  readonly title: string;
  readonly thumbnail: string;
}
