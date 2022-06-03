import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import ContentCenter from '@/components/pc/frames/ContentCenter';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';

const Wrapper = styled(ContentCenter)`
  display: flex;
  flex-wrap: wrap;
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
  /** ストーリー記事一覧 */
  readonly stroyBlogs: DomainTopStoryBlog[];
}
/**
 * トップページ：ストーリー一覧
 */
const TopStories: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      {p.stroyBlogs.map((s: DomainTopStoryBlog, index: number) => (
        <Link
          key={`${index}_${s.id}`}
          to={`/story/${s.id}`}
          style={{
            width: '24%',
          }}
        >
          <LinkInner>
            <Box size="S">
              <Thumbnail width="100%" height="120px" url={s.thumbnail} />

              <Spacer.M />

              <Title size="S">{s.title}</Title>
            </Box>
          </LinkInner>
        </Link>
      ))}
    </Wrapper>
  );
};

export default TopStories;
