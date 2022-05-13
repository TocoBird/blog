import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import MarkdownH1 from '@/components/sp/atoms/Markdown/H1';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainStoryDetailBlog } from '@/domain/storyDetail/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  box-shadow: 0 2px 12px #0f1c2c17;
  display: flex;
  overflow: hidden;
  border-radius: ${size.ui.l1}px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.8;
  }
`;
const IntroText = styled.div`
  line-height: ${size.font.sp.l8}px;
  white-space: pre-line;
`;

interface Props {
  /** 記事内容 */
  readonly blogs: DomainStoryDetailBlog[];
}

/**
 * ストーリー記事詳細：上部
 */
const StoryContentBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.blogs.map((b: DomainStoryDetailBlog, index: number) => {
        const title = `${index + 1}. ${b.introduceTitle}`;

        return (
          <Fragment key={b.id}>
            {index !== 0 && <Spacer.XL />}

            <MarkdownH1 id={`markdown_h_story_id_${b.id}`} text={title} />

            <IntroText
              style={{
                color: color.text.main,
              }}
            >
              {b.introduceText}
            </IntroText>

            <Spacer.XM />

            <Link to={`/article/${b.id}`}>
              <Card
                style={{
                  background: color.box.cardBackground,
                }}
              >
                <Thumbnail width="110px" height="80px" url={b.thumbnail} />
                <Title
                  size="S"
                  style={{
                    flex: 1,
                    padding: size.ui.l3,
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
