import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { Bar } from '@/components/pc/atoms/Bar';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
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
const BlogTitle = styled(Title.XS)`
  flex: 1;
  padding-left: ${size.ui.l3}px;
`;

interface Props {
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainArticleDetailRecommendBlog[];
}

/**
 * 記事詳細：お気に入り記事一覧
 */
const ArticleFavoriteBlog: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title.M>おすすめの記事</Title.M>

      <Spacer.XM />

      <div>
        {p.favoriteBlogs.map(
          (b: DomainArticleDetailRecommendBlog, index: number) => (
            <Fragment key={`${index}_${b.id}`}>
              {index !== 0 && (
                <>
                  <Spacer.M />
                  <Bar />
                  <Spacer.M />
                </>
              )}

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
