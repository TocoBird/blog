import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.text.mainBold};
`;

interface Props {
  /** カテゴリ一覧 */
  readonly categories: DomainArticleDetailCategory[];
}

/**
 * 記事詳細：カテゴリ一覧
 */
const ArticleCategory: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title>カテゴリーで記事を探す</Title>

      <Spacer.M />

      <div>
        {p.categories.map(c => (
          <Fragment key={c.id}>
            <Link to={`/category/${c.id}`}>
              <ButtonCategory>#{c.name}</ButtonCategory>
            </Link>

            <Spacer.S />
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleCategory;
