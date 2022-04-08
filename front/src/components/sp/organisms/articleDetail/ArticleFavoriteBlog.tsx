import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import { DomainFavoriteBlog } from '@/modules/interfaces/domain/articleDetail';
import size from '@/modules/common/size';
import colors from '@/modules/common/colors';
import { SpacerS, SpacerM } from '@/components/sp/atoms/Spacer';

const Wrapper = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: ${size.font.l4}px;
  color: ${colors.text.mainBold};
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    opacity: 0.8;
  }
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 100px;
  height: 60px;
  background-size: cover;
  background-position: 50% 50%;
`;
const BlogTitle = styled.div`
  flex: 1;
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 14px;
  padding-left: ${size.ui.l3}px;
`;

interface Props {
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainFavoriteBlog[];
}

/**
 *
 */
const ArticleFavoriteBlog: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title>おすすめの記事</Title>

      <SpacerM />

      <div>
        {p.favoriteBlogs.map((b: DomainFavoriteBlog, index: number) => (
          <Fragment key={`${index}_${b.id}`}>
            {index !== 0 && <SpacerS />}

            <Link to={`/article/${b.id}`}>
              <Card>
                <Thumbnail
                  style={{
                    backgroundImage: `url('${b.thumbnail}')`,
                  }}
                />
                <BlogTitle>{b.title}</BlogTitle>
              </Card>
            </Link>
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleFavoriteBlog;
