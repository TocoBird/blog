import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import MarkdownH1 from '@/components/pc/common/atoms/Markdown/H1';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Thumbnail from '@/components/pc/common/atoms/Thumbnail';
import Title from '@/components/pc/common/atoms/Title';
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
    opacity: 0.85;
    box-shadow: 0 8px 12px #0f1c2c40;
  }
`;
const IntroText = styled.div`
  font-size: ${size.font.pc.l3}px;
  line-height: ${size.font.pc.l8}px;
  white-space: pre-line;
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
      {p.blogs.map((b: DomainStoryDetailBlog, index: number) => {
        const title = `${index + 1}. ${b.introduceTitle}`;

        return (
          <Fragment key={b.id}>
            {index !== 0 && <Spacer.XXXL />}

            <MarkdownH1 id={`markdown_h_story_id_${b.id}`} text={title} />

            <IntroText
              style={{
                color: color.text.main,
              }}
            >
              {b.introduceText}
            </IntroText>

            <Spacer.L />

            <Link to={`/article/${b.urlid}`}>
              <Card
                style={{
                  background: color.box.cardBackground,
                }}
              >
                <Thumbnail width="180px" height="110px" url={b.thumbnail} />
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
        );
      })}
    </Wrapper>
  );
};

export default StoryContentBlogs;
