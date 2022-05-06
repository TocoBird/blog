import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Thumbnail from '@/components/sp/atoms/Thumbnail';
import Title from '@/components/sp/atoms/Title';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l5}px ${size.ui.l4}px;
  box-sizing: border-box;
`;
const Text = styled.div`
  font-size: ${size.font.pc.l3}px;
  font-weight: 500;
`;

const Card = styled.div`
  &:hover {
    opacity: 0.8;
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
    <Wrapper
      style={{
        background: color.box.background,
      }}
    >
      {p.stroyBlogs.map((s: DomainTopStoryBlog, index: number) => (
        <Fragment key={`${index}_${s.id}`}>
          {index !== 0 && <Spacer.XM />}

          <Link to={`/story/${s.id}`}>
            <Card>
              <Thumbnail width="100%" height="120px" url={s.thumbnail} />

              <Spacer.S />

              <Title size="S">{s.title}</Title>

              <Spacer.XS />

              <Text
                style={{
                  color: color.text.mainThin,
                }}
              >
                {s.titleSub}
              </Text>
            </Card>
          </Link>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopStories;
