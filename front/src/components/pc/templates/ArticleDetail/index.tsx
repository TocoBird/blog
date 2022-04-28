import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import BlogAuthor from '@/components/pc/molecules/blogDetail/BlogAuthor';
import BlogConcept from '@/components/pc/molecules/blogDetail/BlogConcept';
import BlogMarkdown from '@/components/pc/molecules/blogDetail/BlogMarkdown';
import ArticleCategory from '@/components/pc/templates/ArticleDetail/organisms/ArticleCategory';
import ArticleFavoriteBlog from '@/components/pc/templates/ArticleDetail/organisms/ArticleFavoriteBlog';
import ArticleRelated from '@/components/pc/templates/ArticleDetail/organisms/ArticleRelated';
import ArticleStory from '@/components/pc/templates/ArticleDetail/organisms/ArticleStory';
import ArticleTableOfContents from '@/components/pc/templates/ArticleDetail/organisms/ArticleTableOfContents';
import ArticleTop from '@/components/pc/templates/ArticleDetail/organisms/ArticleTop';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
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
  /** 記事一覧 */
  readonly blog: DomainArticleDetailBlog;
  /** カテゴリ一覧 */
  readonly categories: DomainArticleDetailCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
  /** 関連する記事一覧 */
  readonly relatedBlogs: DomainArticleDetailRelatedBlog[];
  /** ストーリー記事一覧 */
  readonly stroyBlogs: DomainArticleDetailStoryBlog[];
}
/**
 * テンプレート：記事詳細
 */
const TemplatePCArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <ArticleTop blog={p.blog} />

      <Spacer.L />

      <ContentWrapper>
        <Content>
          <Left>
            <Thumbnail
              width="100%"
              height="280px"
              url={p.blog.thumbnail}
              style={{
                borderRadius: size.ui.l1,
                boxShadow: '0 2px 24px #0f1c2c12',
              }}
            />

            <Spacer.L />

            <Box size="L">
              <BlogMarkdown nodes={p.blog.textNodes} />

              <Spacer.S />

              <BlogAuthor />
            </Box>

            <Spacer.XXL />

            <ArticleRelated blogs={p.relatedBlogs} />

            <Spacer.XXL />

            <ArticleStory blogs={p.stroyBlogs} />

            <Spacer.XXL />

            <BlogConcept />
          </Left>
          <Right>
            <Box size="M">
              <ArticleTableOfContents nodes={p.blog.textNodes} />
            </Box>

            <Spacer.L />

            <Box size="M">
              <ArticleFavoriteBlog blogs={p.favoriteBlogs} />
            </Box>

            <Spacer.L />

            <Box size="M">
              <ArticleCategory categories={p.categories} />
            </Box>
          </Right>
        </Content>
      </ContentWrapper>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
