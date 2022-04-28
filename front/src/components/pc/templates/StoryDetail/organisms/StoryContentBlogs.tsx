import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import MarkdownH1 from '@/components/pc/atoms/Markdown/H1';
import Spacer from '@/components/pc/atoms/Spacer';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import { DomainStoryDetailBlog } from '@/domain/storyDetail/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  box-shadow: 0 2px 8px #0f1c2c1f;
  display: flex;
  border-radius: ${size.ui.l2}px;
  overflow: hidden;
  box-sizing: border-box;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /** 記事内容 */
  readonly blogs: DomainStoryDetailBlog[];
}

/**
 * ストーリー記事詳細：本文
 */
const StoryContentBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.blogs.map((b: DomainStoryDetailBlog, index: number) => (
        <Fragment key={b.id}>
          {index !== 0 && <Spacer.XXXL />}

          <MarkdownH1
            id={`markdown_h_story_id_${b.id}`}
            text={b.introduceTitle}
          />

          <div
            style={{
              color: color.text.main,
            }}
          >
            {b.introduceText}
          </div>

          <Spacer.L />

          <Link to={`/article/${b.id}`}>
            <Card
              style={{
                background: color.box.cardBackground,
              }}
            >
              <Thumbnail width="150px" height="110px" url={b.thumbnail} />
              <Title
                size="S"
                style={{
                  flex: 1,
                  padding: size.ui.l4,
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

export default StoryContentBlogs;
