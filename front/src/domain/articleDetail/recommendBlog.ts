import {
  BlogId,
  BlogURLId,
  BlogTitle,
  BlogThumbnail,
} from '@/domain/_site/blog';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogURLId & BlogTitle & BlogThumbnail;

/**
 * おすすめの記事
 */
export class DomainArticleDetailRecommendBlog implements Blog {
  constructor(
    /** おすすめ記事ID */
    public readonly id: number = 0,
    /** URLのID */
    public readonly urlid: string = '',
    /** タイトル */
    public readonly title: string = '',
    /** サムネイルURL */
    public readonly thumbnail: string = ''
  ) {}
}
