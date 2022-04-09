import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import { DomainArticleDetailBlog } from '@/domain/articleDetail/blog';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
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
  readonly blog: DomainArticleDetailBlog;
}

/**
 * 記事詳細：上部
 */
const ArticleTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title>{p.blog.title}</Title>

      <Spacer.S />

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
