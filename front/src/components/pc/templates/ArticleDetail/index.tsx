import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import ArticleCategory from '@/components/pc/templates/ArticleDetail/organisms/ArticleCategory';
import ArticleConcept from '@/components/pc/templates/ArticleDetail/organisms/ArticleConcept';
import ArticleContent from '@/components/pc/templates/ArticleDetail/organisms/ArticleContent';
import ArticleFavoriteBlog from '@/components/pc/templates/ArticleDetail/organisms/ArticleFavoriteBlog';
import ArticleRelated from '@/components/pc/templates/ArticleDetail/organisms/ArticleRelated';
import ArticleTableOfContents from '@/components/pc/templates/ArticleDetail/organisms/ArticleTableOfContents';
import ArticleTop from '@/components/pc/templates/ArticleDetail/organisms/ArticleTop';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';
import size from '@/modules/common/size';

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
                borderRadius: 2,
                boxShadow: '0 2px 12px #0f1c2c17',
              }}
            />

            <Spacer.L />

            <Box size="L">
              <ArticleContent nodes={p.blog.textNodes} />
            </Box>

            <Spacer.L />

            <Box size="L">
              <ArticleRelated blogs={p.relatedBlogs} />
            </Box>

            <Spacer.L />

            <Box size="L">
              <ArticleConcept />
            </Box>
          </Left>
          <Right>
            <Box size="M">
              <ArticleCategory categories={p.categories} />
            </Box>

            <Spacer.L />

            <Box size="M">
              <ArticleTableOfContents nodes={p.blog.textNodes} />
            </Box>

            <Spacer.L />

            <Box size="M">
              <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
            </Box>
          </Right>
        </Content>
      </ContentWrapper>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
