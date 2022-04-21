import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import BlogAuthor from '@/components/pc/molecules/blogDetail/BlogAuthor';
import BlogConcept from '@/components/pc/molecules/blogDetail/BlogConcept';
import BlogMarkdown from '@/components/pc/molecules/blogDetail/BlogMarkdown';
import StoryCategory from '@/components/pc/templates/StoryDetail/organisms/StoryCategory';
import StoryContentBlogs from '@/components/pc/templates/StoryDetail/organisms/StoryContentBlogs';
import StoryFavoriteBlog from '@/components/pc/templates/StoryDetail/organisms/StoryFavoriteBlog';
import StoryRelatedStoryBlog from '@/components/pc/templates/StoryDetail/organisms/StoryRelatedStoryBlog';
import StoryTop from '@/components/pc/templates/StoryDetail/organisms/StoryTop';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailRelatedStoryBlog } from '@/domain/storyDetail/relatedStoryBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  width: 280px;
  margin-left: ${size.ui.l8}px;
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
const TemplatePCStoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <StoryTop blog={p.storyBlog} />

      <Spacer.L />

      <ContentWrapper>
        <Content>
          <Left>
            <Thumbnail
              width="100%"
              height="280px"
              url={p.storyBlog.thumbnail}
              style={{
                borderRadius: 2,
                boxShadow: '0 2px 12px #0f1c2c17',
              }}
            />

            <Spacer.L />

            <Box size="L">
              <BlogMarkdown nodes={p.storyBlog.textIntroductionNodes} />

              <Spacer.L />

              <StoryContentBlogs blogs={p.storyBlog.blogs} />

              <Spacer.XXXL />

              <BlogMarkdown nodes={p.storyBlog.textConclusionNodes} />

              <Spacer.S />

              <BlogAuthor />
            </Box>

            <Spacer.L />

            <Box size="L">
              <StoryRelatedStoryBlog blogs={p.relatedStoryBlogs} />
            </Box>

            <Spacer.L />

            <Box size="L">
              <BlogConcept />
            </Box>
          </Left>
          <Right>
            <Box size="M">
              <StoryCategory categories={p.categories} />
            </Box>

            <Spacer.L />

            <Box size="M">
              <StoryFavoriteBlog blogs={p.favoriteBlogs} />
            </Box>
          </Right>
        </Content>
      </ContentWrapper>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCStoryDetail;
