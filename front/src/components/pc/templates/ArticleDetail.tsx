import React from 'react';
import { styled } from 'linaria/react';
import {
  DomainBlogDetail,
  DomainCategory,
} from '../../../modules/interfaces/domain/blog';
import { SpacerS, SpacerL } from '../atoms/Spacer';
import ArticleTop from '../organisms/articleDetail/ArticleTop';
import ArticleContent from '../organisms/articleDetail/ArticleContent';
import ArticleCategory from '../organisms/articleDetail/ArticleCategory';
import size from '../../../modules/common/size';
import colors from '../../../modules/common/colors';

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
const Title = styled.div`
  font-weight: bold;
  font-size: ${size.font.l4}px;
  color: ${colors.text.mainBold};
`;
const Item = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
`;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: 16px;
`;

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
}
/**
 * テンプレート：記事詳細
 */
const TemplatePCArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <ArticleTop blog={p.blog} />

      <SpacerL />

      <ContentWrapper>
        <Content>
          <Left>
            <Thumbnail
              style={{
                backgroundImage: `url('${p.blog.thumbnail}')`,
              }}
            />

            <SpacerL />

            <Item>
              <ArticleContent text={p.blog.text} />
            </Item>

            <SpacerL />

            <Item>
              <Title>ブログのコンセプト</Title>

              <SpacerS />

              <Detail>
                プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
              </Detail>
            </Item>
          </Left>
          <Right>
            <Item>
              <ArticleCategory categories={p.categories} />
            </Item>
          </Right>
        </Content>
      </ContentWrapper>

      <SpacerL />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
