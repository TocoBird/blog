import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Text = styled.div`
  font-size: ${size.font.pc.l3}px;
  font-weight: 500;
`;
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
  /** ストーリー記事一覧 */
  readonly blogs: DomainArticleDetailStoryBlog[];
}

/**
 * 記事詳細：ストーリー記事一覧
 */
const ArticleStory: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <LabelTitle size="XM" icon={faBookBookmark}>
        関連する具体案
      </LabelTitle>

      <Spacer.XM />

      <Articles>
        {p.blogs.map((b: DomainArticleDetailStoryBlog, index: number) => (
          <Link
            to={`/story/${b.id}`}
            key={`${index}_${b.id}`}
            style={{
              width: '32%',
            }}
          >
            <LinkInner>
              <Box size="S">
                <Thumbnail
                  width="100%"
                  height="120px"
                  url={b.thumbnail}
                  isLazy={true}
                />

                <Spacer.M />

                <Title size="S">{b.title}</Title>

                <Spacer.XS />

                <Text
                  style={{
                    color: color.text.mainThin,
                  }}
                >
                  {b.titleSub}
                </Text>
              </Box>
            </LinkInner>
          </Link>
        ))}
      </Articles>
    </Wrapper>
  );
};

export default ArticleStory;
