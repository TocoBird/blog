import { DomainStoryDetailBlog } from './blog';
import {
  StoryBlogTitle,
  StoryBlogTitleSub,
  StoryBlogThumbnail,
  StoryBlogUpdatedAt,
  StoryBlogCreatedAt,
  // StoryBlogTextConclusion,
  // StoryBlogTextIntroduction,
} from '@/domain/_site/storyBlog';
import { TagNode } from '@/modules/common/markdown';

/** サイト単位のドメインの部分集合 */
type StoryBlog = StoryBlogTitle &
  StoryBlogTitleSub &
  StoryBlogThumbnail &
  StoryBlogUpdatedAt &
  StoryBlogCreatedAt;
// StoryBlogTextIntroduction &
// StoryBlogTextConclusion;

/**
 * ストーリー記事
 */
export class DomainStoryDetailStoryBlog implements StoryBlog {
  constructor(
    public readonly title: string = '',
    public readonly titleSub: string = '',
    public readonly thumbnail: string = '',
    public readonly textIntroductionNodes: TagNode[] = [] as TagNode[],
    public readonly textConclusionNodes: TagNode[] = [] as TagNode[],
    public readonly updatedAt: string = '',
    public readonly createdAt: string = '',
    public readonly blogs: DomainStoryDetailBlog[] = [] as DomainStoryDetailBlog[]
  ) {}
}
