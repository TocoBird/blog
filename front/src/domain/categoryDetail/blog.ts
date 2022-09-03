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
    /** カテゴリID */
    public readonly id: number = 0,
    /** URLのID */
    public readonly urlid: string = '',
    /** タイトル */
    public readonly title: string = '',
    /** サムネイルのURL */
    public readonly thumbnail: string = ''
  ) {}
}
