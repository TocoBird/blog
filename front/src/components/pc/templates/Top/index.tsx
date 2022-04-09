import React from 'react';
import { styled } from 'linaria/react';
import { DomainTopPageCategory } from '@/modules/domain/category';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';
import TopHeader from '@/components/pc/templates/Top/organisms/TopHeader';
import TopBlogs from '@/components/pc/templates/Top/organisms/TopBlogs';
import Spacer from '@/components/pc/atoms/Spacer';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-size: ${size.font.l6}px;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopPageCategory[];
}

/**
 * テンプレート：トップページ
 */
const TemplatePCTop: React.FC<Props> = (p: Props): JSX.Element => {
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

export default TemplatePCTop;
