import React, { Fragment } from 'react';
import { styled } from 'linaria/react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import {
  DomainBlogDetail,
  DomainCategory,
} from '../../../modules/interfaces/domain/blog';
import { SpacerS, SpacerL } from '../atoms/Spacer';
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
const ContentWrapperInner = styled.div`
  padding: ${size.ui.l8}px 0;
`;
const Content = styled.div`
  display: flex;
`;
const ContentLeft = styled.div`
  flex: 1;
`;
const ContentRight = styled.div`
  width: 280px;
  margin-left: ${size.ui.l8}px;
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  height: 280px;
  background-size: cover;
  background-position: 50% 50%;
`;
const TitleTop = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: ${colors.text.mainBold};
`;
const Title = styled.div`
  font-weight: bold;
  font-size: ${size.font.l4}px;
  color: ${colors.text.mainBold};
`;
const TopContent = styled.div`
  background: ${colors.card.main};
`;
const Item = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
`;
const TopContentItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
`;
const Date = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Category = styled.div`
  color: ${colors.text.link};
  font-weight: 500;
`;
const Author = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: 15px;
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
      <TopContent>
        <ContentWrapper>
          <ContentWrapperInner>
            <TitleTop>{p.blog.title}</TitleTop>

            <SpacerS />

            <TopContentItems>
              <Date>
                <Icon icon={faCalendarDays} />
                {p.blog.updatedAt}更新
              </Date>
              <Category>
                <Link to={`/category/${p.blog.categoryId}`}>
                  #{p.blog.categoryName}
                </Link>
              </Category>
            </TopContentItems>
          </ContentWrapperInner>
        </ContentWrapper>
      </TopContent>

      <SpacerL />

      <ContentWrapper>
        <Content>
          <ContentLeft>
            <Thumbnail
              style={{
                backgroundImage: `url('${p.blog.thumbnail}')`,
              }}
            />

            <SpacerL />

            <Item>
              <div className="blogMarkdown">
                <ReactMarkdown>{p.blog.text}</ReactMarkdown>
              </div>

              <SpacerS />

              <Author>作者 tocotoco</Author>
            </Item>

            <SpacerL />

            <Item>
              <Title>ブログのコンセプト</Title>

              <SpacerS />

              <Detail>
                プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
              </Detail>
            </Item>
          </ContentLeft>
          <ContentRight>
            <Item>
              <Title>カテゴリーで記事を探す</Title>
              <SpacerS />
              <div>
                {p.categories.map(c => (
                  <Fragment key={c.id}>
                    <Link to={`/category/${c.id}`}>
                      <div>#{c.name}</div>
                    </Link>

                    <SpacerS />
                  </Fragment>
                ))}
              </div>
            </Item>
          </ContentRight>
        </Content>
      </ContentWrapper>

      <SpacerS />
    </Wrapper>
  );
};

export default TemplatePCArticleDetail;
