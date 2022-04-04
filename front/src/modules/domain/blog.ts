/**
 * どめいん
 */
export interface DomainBlog {
  readonly id: number;
  readonly title: string;
  readonly text: string;
}

export interface DomainBlogDetail {
  readonly id: number;
  readonly title: string;
  readonly text: string;
  readonly updatedAt: string;
  readonly thumbnail: string;
  readonly categoryId: number;
  readonly categoryName: string;
}
