import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Text = styled.div`
  font-size: ${size.font.pc.l3}px;
  font-weight: 500;
`;
const LinkInner = styled.div`
  transition: 0.2s;
  &:hover {
    opacity: 0.75;
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
  const { color } = useColor();

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

              <Spacer.XS />

              <Text
                style={{
                  color: color.text.mainThin,
                }}
              >
                {s.titleSub}
              </Text>
            </Box>
          </LinkInner>
        </Link>
      ))}
    </Wrapper>
  );
};

export default TopStories;