import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import TopBlogs from '@/components/pc/templates/Top/organisms/TopBlogs';
import TopConcept from '@/components/pc/templates/Top/organisms/TopConcept';
import TopHeader from '@/components/pc/templates/Top/organisms/TopHeader';
import { DomainTopCategory } from '@/domain/top/blog';

const Wrapper = styled.div``;

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

      <Spacer.XXL />

      <Title
        size="L"
        style={{
          textAlign: 'center',
        }}
      >
        最新の記事
      </Title>

      <Spacer.XXL />

      <TopBlogs categories={p.categories} />

      <Spacer.XXL />

      <TopConcept />
    </Wrapper>
  );
};

export default TemplatePCTop;
