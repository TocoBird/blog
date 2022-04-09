import React from 'react';
import { styled } from 'linaria/react';
import {
  DomainBlogDetail,
  DomainCategory,
  DomainFavoriteBlog,
} from '@/modules/domain/articleDetail';
import size from '@/modules/common/size';
import colors from '@/modules/common/colors';
import Spacer from '@/components/sp/atoms/Spacer';
import ArticleFavoriteBlog from '@/components/sp/organisms/articleDetail/ArticleFavoriteBlog';
import ArticleTop from '@/components/sp/organisms/articleDetail/ArticleTop';
import ArticleContent from '@/components/sp/organisms/articleDetail/ArticleContent';
import ArticleCategory from '@/components/sp/organisms/articleDetail/ArticleCategory';
import ArticleConcept from '@/components/sp/organisms/articleDetail/ArticleConcept';

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
  padding: ${size.ui.l5}px;
  box-shadow: 0 2px 12px #0f1c2c17;
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

      <Content>
        <ArticleTop blog={p.blog} />
      </Content>

      <Spacer.M />

      <Content>
        <ArticleContent text={p.blog.text} />
      </Content>

      <Spacer.M />

      <Content>
        <ArticleCategory categories={p.categories} />
      </Content>

      <Spacer.M />

      <Content>
        <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
      </Content>

      <Spacer.M />

      <Content>
        <ArticleConcept />
      </Content>

      <Spacer.M />
    </Wrapper>
  );
};

export default TemplateSPArticleDetail;
