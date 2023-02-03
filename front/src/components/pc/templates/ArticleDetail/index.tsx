import { styled } from 'linaria/react';
import React from 'react';
import Banner from '@/components/pc/common/atoms/Banner';
import Box from '@/components/pc/common/atoms/Box';
import ButtonCopyURL from '@/components/pc/common/atoms/ButtonCopyURL';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Thumbnail from '@/components/pc/common/atoms/Thumbnail';
import ContentCenter from '@/components/pc/common/frames/ContentCenter';
import BlogFooter from '@/components/pc/common/molecules/blogDetail/BlogFooter';
import BlogMarkdown from '@/components/pc/common/molecules/blogDetail/BlogMarkdown';
import ArticleCategory from '@/components/pc/templates/ArticleDetail/organisms/ArticleCategory';
import ArticleFavoriteBlog from '@/components/pc/templates/ArticleDetail/organisms/ArticleFavoriteBlog';
import ArticleInfo from '@/components/pc/templates/ArticleDetail/organisms/ArticleInfo';
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
const ContentWrapper = styled(ContentCenter)``;
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

              <ButtonCopyURL>URLをコピーして記事を共有</ButtonCopyURL>

              <Spacer.L />

              <BlogFooter date={p.blog.createdAt} />
            </Box>

            <Spacer.XXL />

            <ArticleRelated
              blogs={p.relatedBlogs}
              categoryId={p.blog.categoryId}
            />

            <Spacer.XXL />

            <ArticleStory blogs={p.stroyBlogs} />
          </Left>
          <Right>
            <Box size="M">
              <ArticleInfo text={p.blog.featureText} />
            </Box>

            <Spacer.L />

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

            <Spacer.L />

            <Banner />
          </Right>
        </Content>
      </ContentWrapper>

      <Spacer.XXL />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
