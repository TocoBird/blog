import { faFire } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Bar from '@/components/pc/common/atoms/Bar';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Thumbnail from '@/components/pc/common/atoms/Thumbnail';
import Title from '@/components/pc/common/atoms/Title';
import LabelTitle from '@/components/pc/common/molecules/LabelTitle';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';

const Wrapper = styled.div``;
const Card = styled.div`
  transition: 0.2s;
  &:hover {
    opacity: 0.75;
  }
`;

interface Props {
  /** お気に入り記事一覧 */
  readonly blogs: DomainStoryDetailRecommendBlog[];
}

/**
 * ストーリー記事詳細：お気に入り記事一覧
 */
const StoryFavoriteBlog: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <LabelTitle size="M" icon={faFire}>
        おすすめの記事
      </LabelTitle>

      <Spacer.XM />

      <div>
        {p.blogs.map((b: DomainStoryDetailRecommendBlog, index: number) => (
          <Fragment key={`${index}_${b.id}`}>
            {index !== 0 && (
              <>
                <Spacer.XS />
                <Bar />
                <Spacer.S />
              </>
            )}

            <Link to={`/article/${b.urlid}`}>
              <Card>
                <Thumbnail width="100%" height="80px" url={b.thumbnail} />
                <Spacer.XS />
                <Title size="XS">{b.title}</Title>
              </Card>
            </Link>
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default StoryFavoriteBlog;
