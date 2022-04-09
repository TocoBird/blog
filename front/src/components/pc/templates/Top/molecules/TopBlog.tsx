import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import { DomainTopCategoryBlog } from '@/domain/top/blog';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:hover {
    opacity: 0.8;
  }
`;
const Thumbnail = styled.div`
  background: whitesmoke;
  width: 120px;
  height: 80px;
  background-size: cover;
  background-position: 50% 50%;
`;
const Title = styled.div`
  flex: 1;
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 16px;
  padding-left: ${size.ui.l3}px;
`;

interface Props {
  /** ブログ詳細 */
  readonly blog: DomainTopCategoryBlog;
}
/**
 * トップページ：ブログ
 */
const TopBlogs: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Link to={`/article/${p.blog.id}`}>
        <Card>
          <Thumbnail
            style={{
              backgroundImage: `url('${p.blog.thumbnail}')`,
            }}
          />

          <Title>{p.blog.title}</Title>
        </Card>
      </Link>
    </Wrapper>
  );
};

export default TopBlogs;
