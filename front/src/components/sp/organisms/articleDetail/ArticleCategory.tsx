import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { DomainCategory } from '@/modules/domain/blog';
import colors from '@/modules/common/colors';
import { SpacerS, SpacerM } from '@/components/sp/atoms/Spacer';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';

const Wrapper = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.text.mainBold};
`;

interface Props {
  /** カテゴリ一覧 */
  readonly categories: DomainCategory[];
}

/**
 * 記事詳細：カテゴリ一覧
 */
const ArticleCategory: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title>カテゴリーで記事を探す</Title>

      <SpacerM />

      <div>
        {p.categories.map(c => (
          <Fragment key={c.id}>
            <Link to={`/category/${c.id}`}>
              <ButtonCategory>#{c.name}</ButtonCategory>
            </Link>

            <SpacerS />
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleCategory;
