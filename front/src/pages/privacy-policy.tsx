import React from 'react';
import Frame from '@/components/frame';
import TemplatePCPrivacyPolicy from '@/components/pc/templates/PrivacyPolicy';
import TemplateSPPrivacyPolicy from '@/components/sp/templates/PrivacyPolicy';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

const PrivacyPolicy: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const option: MetaOption = {
    title: 'プライバシーポリシー',
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
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
