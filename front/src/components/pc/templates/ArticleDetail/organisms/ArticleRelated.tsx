import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { DomainArticleDetailRelatedBlog } from '@/domain/articleDetail/relatedBlog';

const Wrapper = styled.div``;
const Articles = styled.div`
  display: flex;
  justify-content: space-between;
`;
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

      <Articles>
        {p.blogs.map((b: DomainArticleDetailRelatedBlog, index: number) => (
          <Link
            to={`/article/${b.id}`}
            key={`${index}_${b.id}`}
            style={{
              width: '49%',
            }}
          >
            <Card>
              <Thumbnail width="100%" height="180px" url={b.thumbnail} />

              <Spacer.M />

              <Title size="S">{b.title}</Title>
            </Card>
          </Link>
        ))}
      </Articles>
    </Wrapper>
  );
};

export default ArticleContent;
