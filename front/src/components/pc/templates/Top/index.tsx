import React from 'react';
import { styled } from 'linaria/react';
import { DomainTopPageCategory } from '@/modules/interfaces/domain/category';
import colors from '@/modules/common/colors';
import TopHeader from '@/components/pc/templates/Top/organisms/TopHeader';
import TopBlogs from '@/components/pc/templates/Top/organisms/TopBlogs';
import { SpacerL } from '@/components/pc/atoms/Spacer';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 28px;
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

      <SpacerL />

      <BlogsTitle>最新の記事</BlogsTitle>

      <SpacerL />

      <TopBlogs categories={p.categories} />
    </Wrapper>
  );
};

export default TemplatePCTop;
