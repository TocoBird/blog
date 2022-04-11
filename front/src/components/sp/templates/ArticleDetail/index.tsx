import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import ArticleCategory from '@/components/sp/templates/ArticleDetail/organisms/ArticleCategory';
import ArticleConcept from '@/components/sp/templates/ArticleDetail/organisms/ArticleConcept';
import ArticleContent from '@/components/sp/templates/ArticleDetail/organisms/ArticleContent';
import ArticleFavoriteBlog from '@/components/sp/templates/ArticleDetail/organisms/ArticleFavoriteBlog';
import ArticleTop from '@/components/sp/templates/ArticleDetail/organisms/ArticleTop';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Content = styled.div`
  padding: ${size.ui.l5}px;
  box-shadow: 0 2px 12px #0f1c2c17;
`;

interface Props {
  /** 記事一覧 */
  readonly blog: DomainArticleDetailBlog;
  /** カテゴリ一覧 */
  readonly categories: DomainArticleDetailCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
}
/**
 * テンプレート：記事詳細
 */
const TemplateSPArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Thumbnail
        width="100%"
        height="120px"
        url={p.blog.thumbnail}
        style={{
          borderRadius: 2,
        }}
      />

      <Content style={{ background: color.box.background }}>
        <ArticleTop blog={p.blog} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <ArticleContent text={p.blog.text} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <ArticleCategory categories={p.categories} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
      </Content>

      <Spacer.M />

      <Content style={{ background: color.box.background }}>
        <ArticleConcept />
      </Content>

      <Spacer.M />
    </Wrapper>
  );
};

export default TemplateSPArticleDetail;
