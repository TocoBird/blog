import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import TopBlogs from '@/components/pc/templates/Top/organisms/TopBlogs';
import TopHeader from '@/components/pc/templates/Top/organisms/TopHeader';
import { DomainTopCategory } from '@/domain/top/blog';

const Wrapper = styled.div``;
const BlogsTitle = styled(Title.L)`
  text-align: center;
`;

interface Props {
  /** 記事一覧 */
  readonly categories: DomainTopCategory[];
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
