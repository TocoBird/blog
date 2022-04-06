/**
 * どめいん
 */
export interface DomainTopPageCategory {
  readonly id: number;
  readonly name: string;
  readonly blogs: DomainTopPageBlog[];
}

export interface DomainTopPageBlog {
  readonly id: number;
  readonly title: string;
  readonly thumbnail: string;
}
