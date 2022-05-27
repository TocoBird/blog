import React from 'react';
import Frame from '@/components/frame';
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
    <Frame isPC={isPC} option={option}>
      <div>{isPC && <TemplatePCNotFound />}</div>
      <div>{!isPC && <TemplateSPNotFound />}</div>
    </Frame>
  );
};

export default NotFound;
