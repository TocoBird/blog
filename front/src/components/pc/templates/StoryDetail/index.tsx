import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import Markdown from '@/components/sp/atoms/Markdown';
import { DomainStoryDetailStoryBlog } from '@/domain/storyDetail/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /** ストーリー記事一覧 */
  readonly storyBlog: DomainStoryDetailStoryBlog;
}
/**
 * テンプレート：ストーリー記事一覧
 */
const TemplatePCStoryDetail: React.FC<Props> = (p: Props): JSX.Element => {
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
          {index !== 0 && <Spacer.S />}
          <div>{b.introduceTitle}</div>
          <div>{b.introduceText}</div>

          <Link to={`/article/${b.id}`}>
            <Card
              style={{
                background: color.box.background,
              }}
            >
              <Thumbnail width="140px" height="100px" url={b.thumbnail} />
              <Title
                size="XS"
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

export default TemplatePCStoryDetail;
