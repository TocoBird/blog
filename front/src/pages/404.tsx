import React from 'react';
import Layout from '@/components/layouts/Basic';
import TemplatePCNotFound from '@/components/pc/templates/NotFound';
import TemplateSPNotFound from '@/components/sp/templates/NotFound';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * ページ: 404
 */
const NotFound: React.FC = (): JSX.Element => {
  const option: MetaOption = {
    title: 'TocoBlog',
    keywords: 'tocoblog,404',
    description: 'ページが見つかりません - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout
      option={option}
      pc={<TemplatePCNotFound />}
      sp={<TemplateSPNotFound />}
    />
  );
};

export default NotFound;
