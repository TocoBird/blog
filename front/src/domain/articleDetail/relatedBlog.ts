import {
  BlogId,
  BlogURLId,
  BlogTitle,
  BlogThumbnail,
} from '@/domain/_site/blog';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogURLId & BlogTitle & BlogThumbnail;

/**
 * 関連する記事
 */
export class DomainArticleDetailRelatedBlog implements Blog {
  constructor(
    /** 関連記事ID */
    public readonly id: number = 0,
    /** URLのID */
    public readonly urlid: string = '',
    /** タイトル */
    public readonly title: string = '',
    /** サムネイルURL */
    public readonly thumbnail: string = ''
  ) {}
}
