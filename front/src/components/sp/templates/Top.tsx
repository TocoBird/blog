import React from 'react';
import { styled } from 'linaria/react';
import { DomainTopPageCategory } from '@/modules/interfaces/domain/category';
import colors from '@/modules/common/colors';
import { SpacerL } from '@/components/sp/atoms/Spacer';
import TopHeader from '@/components/sp/organisms/top/TopHeader';
import TopBlogs from '@/components/sp/organisms/top/TopBlogs';

const Wrapper = styled.div``;
const BlogsTitle = styled.div`
  color: ${colors.text.mainBold};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

interface Props {
  /** ブログ一覧 */
  readonly categories: DomainTopPageCategory[];
}
/**
 * テンプレート：トップページ
 */
const TemplateSPTop: React.FC<Props> = (p: Props): JSX.Element => {
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

export default TemplateSPTop;
