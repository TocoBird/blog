import React from 'react';
import Layout from '@/components/layouts/Basic';
import TemplatePCPrivacyPolicy from '@/components/pc/templates/PrivacyPolicy';
import TemplateSPPrivacyPolicy from '@/components/sp/templates/PrivacyPolicy';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * ページ: プライバシーポリシー
 */
const PrivacyPolicy: React.FC = (): JSX.Element => {
  const option: MetaOption = {
    title: 'プライバシーポリシー',
    keywords: 'tocoblog',
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout
      option={option}
      pc={<TemplatePCPrivacyPolicy />}
      sp={<TemplateSPPrivacyPolicy />}
    />
  );
};

export default PrivacyPolicy;
