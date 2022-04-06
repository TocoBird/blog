import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { DomainCategory } from '../../../../modules/interfaces/domain/blog';
import size from '../../../../modules/common/size';
import colors from '../../../../modules/common/colors';
import { SpacerS, SpacerM } from '../../atoms/Spacer';
import { ButtonCategory } from '../../atoms/ButtonCategory';

const Wrapper = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: ${size.font.l4}px;
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

      <SpacerS />

      <div>
        {p.categories.map((c, index: number) => (
          <Fragment key={c.id}>
            {index !== 0 && <SpacerM />}

            <div>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory>#{c.name}</ButtonCategory>
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleCategory;
