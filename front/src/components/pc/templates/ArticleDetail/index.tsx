import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import ArticleCategory from '@/components/pc/templates/ArticleDetail/organisms/ArticleCategory';
import ArticleConcept from '@/components/pc/templates/ArticleDetail/organisms/ArticleConcept';
import ArticleContent from '@/components/pc/templates/ArticleDetail/organisms/ArticleContent';
import ArticleFavoriteBlog from '@/components/pc/templates/ArticleDetail/organisms/ArticleFavoriteBlog';
import ArticleTop from '@/components/pc/templates/ArticleDetail/organisms/ArticleTop';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';
import {
  DomainBlogDetail,
  DomainCategory,
  DomainFavoriteBlog,
} from '@/modules/domain/articleDetail';

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
const Thumbnail = styled.div`
  background: whitesmoke;
  height: 280px;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 2px 12px #0f1c2c17;
  border-radius: 2px;
`;
const Item = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
`;
const ItemArticle = styled(Item)`
  padding: ${size.ui.l10}px;
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
const TemplatePCArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <ArticleTop blog={p.blog} />

      <Spacer.L />

      <ContentWrapper>
        <Content>
          <Left>
            <Thumbnail
              style={{
                backgroundImage: `url('${p.blog.thumbnail}')`,
              }}
            />

            <Spacer.L />

            <ItemArticle>
              <ArticleContent text={p.blog.text} />
            </ItemArticle>

            <Spacer.L />

            <ItemArticle>
              <ArticleConcept />
            </ItemArticle>
          </Left>
          <Right>
            <Item>
              <ArticleCategory categories={p.categories} />
            </Item>

            <Spacer.L />

            <Item>
              <ArticleFavoriteBlog favoriteBlogs={p.favoriteBlogs} />
            </Item>
          </Right>
        </Content>
      </ContentWrapper>

      <Spacer.L />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
