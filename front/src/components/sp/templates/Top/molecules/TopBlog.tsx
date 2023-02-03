import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Thumbnail from '@/components/sp/common/atoms/Thumbnail';
import Title from '@/components/sp/common/atoms/Title';
import { DomainTopCategoryBlog } from '@/domain/top/blog';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
`;

interface Props {
  /** 記事一覧 */
  readonly blogs: DomainTopCategoryBlog[];
}
/**
 * トップページ：カテゴリ別記事
 */
const TopBlog: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.blogs.map((b: DomainTopCategoryBlog, index: number) => (
        <Fragment key={b.id}>
          {index !== 0 && <Spacer.S />}

          <Link to={`/article/${b.urlid}`}>
            <Card
              style={{
                background: color.box.background,
              }}
            >
              <Thumbnail width="110px" height="70px" url={b.thumbnail} />
              <Title
                size="S"
                style={{
                  flex: 1,
                  paddingLeft: `${size.ui.l4}px`,
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

export default TopBlog;
