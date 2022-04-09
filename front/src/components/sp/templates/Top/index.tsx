import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import TopBlogs from '@/components/sp/templates/Top/organisms/TopBlogs';
import TopHeader from '@/components/sp/templates/Top/organisms/TopHeader';
import { DomainTopCategory } from '@/domain/top/blog';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopCategory[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPTop: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <TopHeader />

      <Spacer.L />

      <BlogsTitle>最新の記事</BlogsTitle>

      <Spacer.L />

      <TopBlogs categories={p.categories} />
    </Wrapper>
  );
};

export default TemplateSPTop;
