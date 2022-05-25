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
    public readonly id: number = 0,
    public readonly urlid: string = '',
    public readonly introduceTitle: string = '',
    public readonly introduceText: string = '',
    public readonly title: string = '',
    public readonly thumbnail: string = ''
  ) {}
}
