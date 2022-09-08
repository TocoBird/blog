import { DomainStoryDetailBlog } from './blog';
import {
  StoryBlogTitle,
  StoryBlogTitleSub,
  StoryBlogThumbnail,
  StoryBlogUpdatedAt,
  StoryBlogCreatedAt,
} from '@/domain/_site/storyBlog';
import { TagNode } from '@/modules/common/markdown';

/** サイト単位のドメインの部分集合 */
type StoryBlog = StoryBlogTitle &
  StoryBlogTitleSub &
  StoryBlogThumbnail &
  StoryBlogUpdatedAt &
  StoryBlogCreatedAt;

/**
 * ストーリー記事
 */
export class DomainStoryDetailStoryBlog implements StoryBlog {
  constructor(
    /** タイトル */
    public readonly title: string = '',
    /** サブタイトル */
    public readonly titleSub: string = '',
    /** サムネイルのURL */
    public readonly thumbnail: string = '',
    /** 導入テキスト一覧 */
    public readonly textIntroductionNodes: TagNode[] = [] as TagNode[],
    /** 結論テキスト一覧 */
    public readonly textConclusionNodes: TagNode[] = [] as TagNode[],
    /** 更新日 */
    public readonly updatedAt: string = '',
    /** 作成日 */
    public readonly createdAt: string = '',
    /** ブログ一覧 */
    public readonly blogs: DomainStoryDetailBlog[] = [] as DomainStoryDetailBlog[]
  ) {}
}
