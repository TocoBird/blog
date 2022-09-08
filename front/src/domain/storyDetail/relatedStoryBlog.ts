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
 * 関連するストーリー記事一覧
 */
export class DomainStoryDetailRelatedStoryBlog implements StoryBlog {
  constructor(
    /** 関連記事ID */
    public readonly id: number = 0,
    /** タイトル */
    public readonly title: string = '',
    /** サブタイトル */
    public readonly titleSub: string = '',
    /** サムネイルURL */
    public readonly thumbnail: string = ''
  ) {}
}
