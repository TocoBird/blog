import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
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
const LinkInner = styled.div`
  transition: 0.2s;
  &:hover {
    opacity: 0.85;
    box-shadow: 0 8px 24px #0f1c2c20;
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
      <LabelTitle size="XM" icon={faBookOpen}>
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
            <LinkInner>
              <Box size="S">
                <Thumbnail width="100%" height="180px" url={b.thumbnail} />

                <Spacer.M />

                <Title size="S">{b.title}</Title>
              </Box>
            </LinkInner>
          </Link>
        ))}
      </Articles>
    </Wrapper>
  );
};

export default ArticleContent;
