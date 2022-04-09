import { BlogId, BlogTitle, BlogThumbnail } from '@/domain/_site/blog';

type Blog = BlogId & BlogTitle & BlogThumbnail;

/**
 * カテゴリ詳細ページの記事
 */
export class DomainCategoryDetailBlog implements Blog {
  constructor(
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly thumbnail: string = ''
  ) {}
}
