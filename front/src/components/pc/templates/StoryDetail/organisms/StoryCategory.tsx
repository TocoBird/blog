import {
  faHashtag,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import ButtonCategory from '@/components/pc/atoms/ButtonCategory';
import Spacer from '@/components/pc/atoms/Spacer';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';

const Wrapper = styled.div``;
const IconHash = styled(FontAwesomeIcon)`
  margin-right: 2px;
`;

interface Props {
  /** カテゴリ一覧 */
  readonly categories: DomainStoryDetailCategory[];
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

      <Spacer.XM />

      <div>
        {p.categories.map((c: DomainStoryDetailCategory, index: number) => (
          <Fragment key={c.id}>
            {index !== 0 && <Spacer.S />}

            <div>
              <Link to={`/category/${c.id}`}>
                <ButtonCategory>
                  <IconHash icon={faHashtag} />
                  {c.name}
                </ButtonCategory>
              </Link>
            </div>
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default StoryCategory;
