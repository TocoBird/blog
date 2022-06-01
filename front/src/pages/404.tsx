import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCNotFound from '@/components/pc/templates/NotFound';
import TemplateSPNotFound from '@/components/sp/templates/NotFound';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * ページ: 404
 */
const NotFound: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const option: MetaOption = {
    title: 'TocoBlog',
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout
      isPC={isPC}
      option={option}
      pc={<TemplatePCNotFound />}
      sp={<TemplateSPNotFound />}
    />
  );
};

export default NotFound;
