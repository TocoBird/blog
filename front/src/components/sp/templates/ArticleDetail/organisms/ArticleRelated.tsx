import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import LabelTitle from '@/components/sp/molecules/LabelTitle';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';

const Wrapper = styled.div``;
const Card = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /** 関連する記事一覧 */
  readonly blogs: DomainArticleDetailRelatedBlog[];
}

/**
 * 記事詳細：関連する記事
 */
const ArticleContent: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <LabelTitle size="M" icon={faBookOpen}>
        関連する記事
      </LabelTitle>

      <Spacer.XM />

      {p.blogs.map((b: DomainArticleDetailRelatedBlog, index: number) => (
        <Fragment key={`${index}_${b.id}`}>
          {index !== 0 && <Spacer.XM />}

          <Link to={`/article/${b.urlid}`}>
            <Card>
              <Thumbnail width="100%" height="120px" url={b.thumbnail} />

              <Spacer.S />

              <Title size="S">{b.title}</Title>
            </Card>
          </Link>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default ArticleContent;
