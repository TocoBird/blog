import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCTermsOfService from '@/components/pc/templates/TermsOfService';
import TemplateSPTermsOfService from '@/components/sp/templates/TermsOfService';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

const TermsOfService: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const option: MetaOption = {
    title: '利用規約',
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout isPC={isPC} option={option}>
      <div>{isPC && <TemplatePCTermsOfService />}</div>
      <div>{!isPC && <TemplateSPTermsOfService />}</div>
    </Layout>
  );
};

export default TermsOfService;
