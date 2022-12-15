import React from 'react';
import Layout from '@/components/layouts/Basic';
import TemplatePCTermsOfService from '@/components/pc/templates/TermsOfService';
import TemplateSPTermsOfService from '@/components/sp/templates/TermsOfService';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * ページ: 利用規約
 */
const TermsOfService: React.FC = (): JSX.Element => {
  const option: MetaOption = {
    title: '利用規約',
    keywords: 'tocoblog',
    description: 'プロダクト開発の問題を解決する情報サイト - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout
      option={option}
      pc={<TemplatePCTermsOfService />}
      sp={<TemplateSPTermsOfService />}
    />
  );
};

export default TermsOfService;
