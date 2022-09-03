import {
  BlogId,
  BlogTitle,
  BlogThumbnail,
  BlogText,
  BlogFeatureText,
  BlogSeoDescription,
  BlogUpdatedAt,
  BlogCreatedAt,
} from '@/domain/_site/blog';
import { TagNode } from '@/modules/common/markdown';

/** サイト単位のドメインの部分集合 */
type Blog = BlogId &
  BlogTitle &
  BlogThumbnail &
  BlogText &
  BlogFeatureText &
  BlogSeoDescription &
  BlogUpdatedAt &
  BlogCreatedAt;

/**
 * 記事詳細
 */
export class DomainArticleDetailBlog implements Blog {
  constructor(
    /** 記事ID */
    public readonly id: number = 0,
    /** タイトル */
    public readonly title: string = '',
    /** 文章 */
    public readonly text: string = '',
    /** 概要 */
    public readonly featureText: string = '',
    /** SEO記事詳細 */
    public readonly seoDescription: string = '',
    /** markdown用の本文テキストのNode */
    public readonly textNodes: TagNode[] = [] as TagNode[],
    /** サムネイルURL */
    public readonly thumbnail: string = '',
    /** 更新日 */
    public readonly updatedAt: string = '',
    /** 作成日 */
    public readonly createdAt: string = '',
    /** カテゴリID */
    public readonly categoryId: number = 0,
    /** カテゴリ名 */
    public readonly categoryName: string = ''
  ) {}
}
