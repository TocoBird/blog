import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Thumbnail from '@/components/sp/common/atoms/Thumbnail';
import Title from '@/components/sp/common/atoms/Title';
import { DomainTopStoryBlog } from '@/domain/top/storyBlog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l5}px ${size.ui.l4}px;
  box-sizing: border-box;
`;
const Card = styled.div`
  display: flex;
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
          {index !== 0 && <Spacer.S />}

          <Link to={`/story/${s.id}`}>
            <Card>
              <Thumbnail width="110px" height="70px" url={s.thumbnail} />
              <Title
                size="S"
                style={{
                  flex: 1,
                  paddingLeft: `${size.ui.l4}px`,
                }}
              >
                {s.title}
              </Title>
            </Card>
          </Link>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default TopStories;
