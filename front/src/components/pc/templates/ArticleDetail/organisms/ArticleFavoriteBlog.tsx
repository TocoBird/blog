import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Bar from '@/components/pc/atoms/Bar';
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

interface Props {
  /** お気に入り記事一覧 */
  readonly blogs: DomainArticleDetailRecommendBlog[];
}

/**
 * 記事詳細：お気に入り記事一覧
 */
const ArticleFavoriteBlog: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Title size="M">おすすめの記事</Title>

      <Spacer.XM />

      <div>
        {p.blogs.map((b: DomainArticleDetailRecommendBlog, index: number) => (
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
                <Title
                  size="XS"
                  style={{
                    flex: 1,
                    paddingLeft: `${size.ui.l3}px`,
                  }}
                >
                  {b.title}
                </Title>
              </Card>
            </Link>
          </Fragment>
        ))}
      </div>
    </Wrapper>
  );
};

export default ArticleFavoriteBlog;
