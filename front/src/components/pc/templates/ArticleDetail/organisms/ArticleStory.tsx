import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const TitleSub = styled.div`
  font-size: ${size.font.pc.l3}px;
  font-weight: bold;
`;
const Text = styled.div`
  font-size: ${size.font.pc.l3}px;
  font-weight: 500;
`;
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
      <LabelTitle size="M" icon={faBookBookmark}>
        関連するストーリー
      </LabelTitle>

      <Spacer.S />

      <TitleSub
        style={{
          color: color.text.mainThin,
        }}
      >
        記事をストーリーにまとめました
      </TitleSub>

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
            <Card>
              <Thumbnail width="100%" height="120px" url={b.thumbnail} />

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
            </Card>
          </Link>
        ))}
      </Articles>
    </Wrapper>
  );
};

export default ArticleStory;
