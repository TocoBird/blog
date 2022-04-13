import { BlogId, BlogTitle, BlogThumbnail } from '@/domain/_site/blog';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogTitle & BlogThumbnail;

/**
 * 関連する記事
 */
export class DomainArticleDetailRelatedBlog implements Blog {
  constructor(
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly thumbnail: string = ''
  ) {}
}
