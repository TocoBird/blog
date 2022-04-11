import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { ButtonCategory } from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import { DomainArticleDetailCategory } from '@/domain/articleDetail/category';

const Wrapper = styled.div``;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
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
      <Title.M>カテゴリーで記事を探す</Title.M>

      <Spacer.M />

      <div>
        {p.categories.map(c => (
          <Fragment key={c.id}>
            <Link to={`/category/${c.id}`}>
              <ButtonCategory>
                <IconHash icon={faHashtag} />
                {c.name}
              </ButtonCategory>
            </Link>

            <Spacer.S />
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleCategory;
