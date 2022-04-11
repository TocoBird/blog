import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Thumbnail from '@/components/pc/atoms/Thumbnail';
import Title from '@/components/pc/atoms/Title';
import { DomainTopCategoryBlog } from '@/domain/top/blog';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    opacity: 0.8;
  }
`;
const TitleStyled = styled(Title.S)`
  flex: 1;
  padding-left: ${size.ui.l3}px;
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
      <Link to={`/article/${p.blog.id}`}>
        <Card>
          <Thumbnail width="120px" height="80px" url={p.blog.thumbnail} />

          <TitleStyled>{p.blog.title}</TitleStyled>
        </Card>
      </Link>
    </Wrapper>
  );
};

export default TopBlogs;
