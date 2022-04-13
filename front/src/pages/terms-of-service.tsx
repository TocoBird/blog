import React from 'react';
import Frame from '@/components/frame';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

const TermsOfService: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const option: MetaOption = {
    title: 'TocoBlog',
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: '',
  };

  return (
    <Frame isPC={isPC} option={option}>
      <div>{isPC && <div>TermsOfService</div>}</div>
      <div>{!isPC && <div>TermsOfService</div>}</div>
    </Frame>
  );
};

export default TermsOfService;
