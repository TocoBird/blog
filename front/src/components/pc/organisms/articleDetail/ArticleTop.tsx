import React from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DomainBlogDetail } from '../../../../modules/interfaces/domain/blog';
import size from '../../../../modules/common/size';
import colors from '../../../../modules/common/colors';
import { SpacerS } from '../../atoms/Spacer';
import { ButtonCategory } from '../../atoms/ButtonCategory';

const Wrapper = styled.div`
  background: ${colors.card.main};
`;
const Content = styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Inner = styled.div`
  padding: ${size.ui.l10}px 0;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: ${colors.text.mainBold};
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
`;
const Date = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Category = styled.div`
  color: ${colors.text.link};
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

interface Props {
  /** ブログ一覧 */
  readonly blog: DomainBlogDetail;
}

/**
 * 記事詳細：上部
 */
const ArticleTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Inner>
          <Title>{p.blog.title}</Title>

          <SpacerS />

          <Items>
            <Date>
              <Icon icon={faCalendarDays} />
              {p.blog.updatedAt}更新
            </Date>
            <Category>
              <Link to={`/category/${p.blog.categoryId}`}>
                <ButtonCategory>#{p.blog.categoryName}</ButtonCategory>
              </Link>
            </Category>
          </Items>
        </Inner>
      </Content>
    </Wrapper>
  );
};

export default ArticleTop;
