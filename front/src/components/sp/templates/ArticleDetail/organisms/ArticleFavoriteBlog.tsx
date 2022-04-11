import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainArticleDetailRecommendBlog } from '@/domain/articleDetail/recommendBlog';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    opacity: 0.8;
  }
`;
const BlogTitle = styled(Title.S)`
  flex: 1;
  padding-left: ${size.ui.l3}px;
`;

interface Props {
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
}

/**
 *
 */
const ArticleFavoriteBlog: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title.M>おすすめの記事</Title.M>

      <Spacer.M />

      <div>
        {p.favoriteBlogs.map(
          (b: DomainArticleDetailRecommendBlog, index: number) => (
            <Fragment key={`${index}_${b.id}`}>
              {index !== 0 && <Spacer.S />}

              <Link to={`/article/${b.id}`}>
                <Card>
                  <Thumbnail width="100px" height="60px" url={b.thumbnail} />
                  <BlogTitle>{b.title}</BlogTitle>
                </Card>
              </Link>
            </Fragment>
          )
        )}
      </div>
    </Wrapper>
  );
};

export default ArticleFavoriteBlog;