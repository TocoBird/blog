import {
  StoryBlogId,
  StoryBlogTitle,
  StoryBlogTitleSub,
  StoryBlogThumbnail,
} from '@/domain/_site/storyBlog';

/** サイト単位のドメインの部分集合 */
type StoryBlog = StoryBlogId &
  StoryBlogTitle &
  StoryBlogTitleSub &
  StoryBlogThumbnail;

/**
 * ストーリー記事
 */
export class DomainArticleDetailStoryBlog implements StoryBlog {
  constructor(
    /** ストーリー記事ID */
    public readonly id: number = 0,
    /** タイトル */
    public readonly title: string = '',
    /** サブタイトル */
    public readonly titleSub: string = '',
    /** サムネイルのURL */
    public readonly thumbnail: string = ''
  ) {}
}
