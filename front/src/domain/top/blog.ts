import { BlogId, BlogTitle, BlogThumbnail } from '@/domain/_site/blog';
import { CategoryId, CategoryName } from '@/domain/_site/category';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogTitle & BlogThumbnail;

/**
 * カテゴリごとの記事詳細
 */
export class DomainTopCategoryBlog implements Blog {
  constructor(
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly thumbnail: string = ''
  ) {}
}

/** サイト単位のドメインの部分集合 */
type Category = CategoryId & CategoryName;

/**
 * カテゴリごとの記事
 */
export class DomainTopCategory implements Category {
  constructor(
    public readonly id: number = 0,
    public readonly name: string = '',
    /** そのカテゴリの記事一覧 */
    public readonly blogs: DomainTopCategoryBlog[] = [] as DomainTopCategoryBlog[]
  ) {}
}
