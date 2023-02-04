import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Thumbnail from '@/components/sp/common/atoms/Thumbnail';
import Title from '@/components/sp/common/atoms/Title';
import LabelTitle from '@/components/sp/common/molecules/LabelTitle';
import { DomainArticleDetailStoryBlog } from '@/domain/articleDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Text = styled.div`
  font-size: ${size.font.sp.l3}px;
  font-weight: 500;
`;
const Articles = styled.div``;
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
        関連する具体案
      </LabelTitle>

      <Spacer.XM />

      <Articles>
        {p.blogs.map((b: DomainArticleDetailStoryBlog, index: number) => (
          <Fragment key={`${index}_${b.id}`}>
            {index !== 0 && <Spacer.XM />}

            <Link to={`/story/${b.id}`}>
              <Card>
                <Thumbnail
                  width="100%"
                  height="120px"
                  url={b.thumbnail}
                  isLazy={true}
                />

                <Spacer.S />

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
          </Fragment>
        ))}
      </Articles>
    </Wrapper>
  );
};

export default ArticleStory;
