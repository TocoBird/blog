import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Markdown from '@/components/sp/atoms/Markdown';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainStoryDetailCategory } from '@/domain/storyDetail/category';
import { DomainStoryDetailRecommendBlog } from '@/domain/storyDetail/recommendBlog';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  /** ストーリー記事一覧 */
  readonly storyBlog: DomainStoryDetailStoryBlog;
  /** カテゴリ一覧 */
  readonly categories: DomainStoryDetailCategory[];
  /** お気に入り記事一覧 */
  readonly favoriteBlogs: DomainStoryDetailRecommendBlog[];
}
/**
 * テンプレート：ストーリー記事一覧
 */
const TemplateSPStoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <div>{p.storyBlog.title}</div>
      <div>{p.storyBlog.titleSub}</div>
      <div>{p.storyBlog.thumbnail}</div>
      <div>{p.storyBlog.updatedAt}</div>

      <Markdown nodes={p.storyBlog.textIntroductionNodes} />

      <Markdown nodes={p.storyBlog.textConclusionNodes} />

      {p.storyBlog.blogs.map((b, index: number) => (
        <Fragment key={b.id}>
          {index !== 0 && <Spacer.M />}
          <div>{b.introduceTitle}</div>
          <div>{b.introduceText}</div>

          <Link to={`/article/${b.id}`}>
            <Card style={{ background: color.box.background }}>
              <Thumbnail width="120px" height="80px" url={b.thumbnail} />
              <Title
                size="S"
                style={{
                  flex: 1,
                  padding: `${size.ui.l4}px`,
                }}
              >
                {b.title}
              </Title>
            </Card>
          </Link>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TemplateSPStoryDetail;
