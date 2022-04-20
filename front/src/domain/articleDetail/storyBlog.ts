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
    public readonly id: number = 0,
    public readonly title: string = '',
    public readonly titleSub: string = '',
    public readonly thumbnail: string = ''
  ) {}
}
