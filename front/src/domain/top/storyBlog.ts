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
export class DomainTopStoryBlog implements StoryBlog {
  constructor(
    /** ストーリ記事ID */
    public readonly id: number = 0,
    /** ストーリ記事タイトル */
    public readonly title: string = '',
    /** ストーリ記事サブタイトル */
    public readonly titleSub: string = '',
    /** サムネイルのURL */
    public readonly thumbnail: string = ''
  ) {}
}
