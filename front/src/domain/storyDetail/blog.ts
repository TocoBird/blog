import {
  BlogId,
  BlogURLId,
  BlogTitle,
  BlogThumbnail,
} from '@/domain/_site/blog';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogURLId & BlogTitle & BlogThumbnail;

/**
 * 記事詳細
 */
export class DomainStoryDetailBlog implements Blog {
  constructor(
    /** 記事ID */
    public readonly id: number = 0,
    /** URLのID */
    public readonly urlid: string = '',
    /** 導入タイトル */
    public readonly introduceTitle: string = '',
    /** 導入概要 */
    public readonly introduceText: string = '',
    /** タイトル */
    public readonly title: string = '',
    /** サムネイルのURL */
    public readonly thumbnail: string = ''
  ) {}
}
