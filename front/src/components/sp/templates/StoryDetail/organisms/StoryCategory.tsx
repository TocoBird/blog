import {
  faHashtag,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/sp/atoms/ButtonCategory';
import Spacer from '@/components/sp/atoms/Spacer';
import LabelTitle from '@/components/sp/molecules/LabelTitle';
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
 * ストーリー記事詳細：カテゴリ一覧
 */
const StoryCategory: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <LabelTitle size="M" icon={faMagnifyingGlass}>
        記事を探す
      </LabelTitle>

      <Spacer.M />

      <div>
        {p.categories.map((c: DomainArticleDetailCategory) => (
          <Fragment key={c.id}>
            <Link to={`/category/${c.id}`}>
              <ButtonCategory>
                <IconHash icon={faHashtag} />
                {c.name}
              </ButtonCategory>
            </Link>

            <Spacer.M />
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default StoryCategory;
