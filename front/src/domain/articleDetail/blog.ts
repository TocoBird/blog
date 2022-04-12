import {
  BlogId,
  BlogTitle,
  BlogThumbnail,
  BlogText,
  BlogUpdatedAt,
} from '@/domain/_site/blog';
import { TagNode } from '@/modules/common/markdown';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId & BlogTitle & BlogThumbnail & BlogText & BlogUpdatedAt;

/**
 * 記事詳細
 */
export class DomainArticleDetailBlog implements Blog {
  constructor(
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly text: string = '',
    /** markdown用の本文テキストのNode */
    public readonly textNodes: TagNode[] = [] as TagNode[],
    public readonly thumbnail: string = '',
    public readonly updatedAt: string = '',
    /** カテゴリID */
    public readonly categoryId: number = 0,
    /** カテゴリ名 */
    public readonly categoryName: string = ''
  ) {}
}
