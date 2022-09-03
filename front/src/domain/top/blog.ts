import {
  BlogId,
  BlogURLId,
  BlogTitle,
  BlogThumbnail,
} from '@/domain/_site/blog';
import { CategoryId, CategoryName } from '@/domain/_site/category';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogURLId & BlogTitle & BlogThumbnail;

/**
 * カテゴリごとの記事詳細
 */
export class DomainTopCategoryBlog implements Blog {
  constructor(
    /** 記事ID */
    public readonly id: number = 0,
    /** URLのID */
    public readonly urlid: string = '',
    /** タイトル */
    public readonly title: string = '',
    /** サムネイルのURL */
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
    /** カテゴリID */
    public readonly id: number = 0,
    /** カテゴリ名 */
    public readonly name: string = '',
    /** そのカテゴリの記事一覧 */
    public readonly blogs: DomainTopCategoryBlog[] = [] as DomainTopCategoryBlog[]
  ) {}
}
