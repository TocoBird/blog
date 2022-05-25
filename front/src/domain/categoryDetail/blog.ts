import {
  BlogId,
  BlogURLId,
  BlogTitle,
  BlogThumbnail,
} from '@/domain/_site/blog';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogURLId & BlogTitle & BlogThumbnail;

/**
 * カテゴリ詳細ページの記事
 */
export class DomainCategoryDetailBlog implements Blog {
  constructor(
    public readonly id: number = 0,
    public readonly urlid: string = '',
    public readonly title: string = '',
    public readonly thumbnail: string = ''
  ) {}
}
