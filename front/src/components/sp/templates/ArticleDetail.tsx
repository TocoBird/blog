import React from 'react';
import { styled } from 'linaria/react';
import {
  DomainBlogDetail,
  DomainCategory,
  DomainFavoriteBlog,
} from '../../../modules/interfaces/domain/articleDetail';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';
import { SpacerS } from '../atoms/Spacer';
import ArticleFavoriteBlog from '../organisms/articleDetail/ArticleFavoriteBlog';
import ArticleTop from '../organisms/articleDetail/ArticleTop';
import ArticleContent from '../organisms/articleDetail/ArticleContent';
import ArticleCategory from '../organisms/articleDetail/ArticleCategory';
import ArticleConcept from '../organisms/articleDetail/ArticleConcept';

const Wrapper = styled.div``;
const Thumbnail = styled.div`
  background: whitesmoke;
  height: 120px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 2px;
`;
const Content = styled.div`
  background: ${colors.card.main};
  padding: ${size.ui.l3}px;
`;

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainFavoriteBlog[];
}
/**
 * テンプレート：記事詳細
 */
const TemplateSPArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Thumbnail
        style={{
          backgroundImage: `url('${p.blog.thumbnail}')`,
        }}
      />

      <ArticleTop blog={p.blog} />

      <SpacerS />

      <Content>
        <ArticleContent text={p.blog.text} />
      </Content>

      <SpacerS />

      <Content>
        <ArticleCategory categories={p.categories} />
      </Content>

      <SpacerS />

      <Content>
        <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
      </Content>

      <SpacerS />

      <Content>
        <ArticleConcept />
      </Content>

      <SpacerS />
    </Wrapper>
  );
};

export default TemplateSPArticleDetail;
