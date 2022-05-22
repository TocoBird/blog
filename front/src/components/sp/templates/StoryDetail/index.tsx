import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import BlogConcept from '@/components/sp/molecules/blogDetail/BlogConcept';
import BlogContent from '@/components/sp/molecules/blogDetail/BlogContent';
import BlogFooter from '@/components/sp/molecules/blogDetail/BlogFooter';
import StoryCategory from '@/components/sp/templates/StoryDetail/organisms/StoryCategory';
import StoryContentBlogs from '@/components/sp/templates/StoryDetail/organisms/StoryContentBlogs';
import StoryFavoriteBlog from '@/components/sp/templates/StoryDetail/organisms/StoryFavoriteBlog';
import StoryRelatedStoryBlog from '@/components/sp/templates/StoryDetail/organisms/StoryRelatedStoryBlog';
import StoryTop from '@/components/sp/templates/StoryDetail/organisms/StoryTop';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailRelatedStoryBlog } from '@/domain/storyDetail/relatedStoryBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Content = styled.div`
  padding: ${size.ui.l5}px;
  box-shadow: 0 2px 12px #0f1c2c17;
`;

interface Props {
  /** ストーリー記事一覧 */
  readonly storyBlog: DomainStoryDetailStoryBlog;
  /** カテゴリ一覧 */
  readonly categories: DomainStoryDetailCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainStoryDetailRecommendBlog[];
  /** 関連するストーリー記事一覧 */
  readonly relatedStoryBlogs: DomainStoryDetailRelatedStoryBlog[];
}
/**
 * テンプレート：ストーリー記事一覧
 */
const TemplateSPStoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Thumbnail width="100%" height="140px" url={p.storyBlog.thumbnail} />

      <Content style={{ background: color.box.background }}>
        <StoryTop blog={p.storyBlog} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <BlogContent nodes={p.storyBlog.textIntroductionNodes} />

        <Spacer.M />

        <StoryContentBlogs blogs={p.storyBlog.blogs} />

        <Spacer.XL />

        <BlogContent nodes={p.storyBlog.textConclusionNodes} />

        <Spacer.M />

        <BlogFooter date={p.storyBlog.createdAt} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <StoryCategory categories={p.categories} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <StoryFavoriteBlog blogs={p.favoriteBlogs} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <StoryRelatedStoryBlog blogs={p.relatedStoryBlogs} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <BlogConcept />
      </Content>

      <Spacer.M />
    </Wrapper>
  );
};

export default TemplateSPStoryDetail;
