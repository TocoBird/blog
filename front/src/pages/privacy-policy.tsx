import React from 'react';
import Frame from '@/components/frame';
import TemplatePCPrivacyPolicy from '@/components/pc/templates/PrivacyPolicy';
import TemplateSPPrivacyPolicy from '@/components/sp/templates/PrivacyPolicy';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

const PrivacyPolicy: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const option: MetaOption = {
    title: 'TocoBlog',
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: '',
  };

  return (
    <Frame isPC={isPC} option={option}>
      <div>{isPC && <TemplatePCPrivacyPolicy />}</div>
      <div>{!isPC && <TemplateSPPrivacyPolicy />}</div>
    </Frame>
  );
};

export default PrivacyPolicy;
