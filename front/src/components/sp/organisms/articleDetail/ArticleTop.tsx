import React from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DomainBlogDetail } from '@/modules/interfaces/domain/blog';
import size from '@/modules/common/size';
import colors from '@/modules/common/colors';
import { SpacerS } from '@/components/sp/atoms/Spacer';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';

const Wrapper = styled.div`
  background: ${colors.card.main};
  padding: ${size.ui.l5}px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.text.mainBold};
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
      <Title>{p.blog.title}</Title>

      <SpacerS />

      <TopContentItems>
        <Date>
          <Icon icon={faCalendarDays} />
          {p.blog.updatedAt}更新
        </Date>
        <Category>
          <Link to={`/category/${p.blog.categoryId}`}>
            <ButtonCategory>#{p.blog.categoryName}</ButtonCategory>
          </Link>
        </Category>
      </TopContentItems>
    </Wrapper>
  );
};

export default ArticleTop;
