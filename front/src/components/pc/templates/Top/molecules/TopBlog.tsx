import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Thumbnail from '@/components/pc/common/atoms/Thumbnail';
import Title from '@/components/pc/common/atoms/Title';
import { DomainTopCategoryBlog } from '@/domain/top/blog';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.2s;
  &:hover {
    opacity: 0.75;
  }
`;

interface Props {
  /** 記事詳細 */
  readonly blog: DomainTopCategoryBlog;
}
/**
 * トップページ：記事
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Link to={`/article/${p.blog.urlid}`}>
        <Card>
          <Thumbnail width="140px" height="80px" url={p.blog.thumbnail} />

          <Title
            size="S"
            style={{
              flex: 1,
              paddingLeft: `${size.ui.l3}px`,
            }}
          >
            {p.blog.title}
          </Title>
        </Card>
      </Link>
    </Wrapper>
  );
};

export default TopBlogs;
