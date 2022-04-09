import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { ButtonCategory } from '@/components/pc/atoms/ButtonCategory';
import Spacer from '@/components/pc/atoms/Spacer';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';
import { DomainCategory } from '@/modules/domain/blog';

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

      <Spacer.XM />

      <div>
        {p.categories.map((c, index: number) => (
          <Fragment key={c.id}>
            {index !== 0 && <Spacer.S />}

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
