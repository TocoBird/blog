import React from 'react';
import Concept from '@/components/pc/layouts/Base/molecules/Concept';
import Footer from '@/components/pc/layouts/Base/molecules/Footer';
import FooterInfo from '@/components/pc/layouts/Base/molecules/FooterInfo';
import Header from '@/components/pc/layouts/Base/molecules/Header';
import { useColor } from '@/modules/common/colors';

interface Props {
  readonly children: JSX.Element;
}

/**
 * レイアウト
 */
const LayoutPC: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <div
      style={{
        backgroundImage: color.site.background,
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />

      {p.children}

      <Concept />

      <FooterInfo />

      <Footer />
    </div>
  );
};

export default LayoutPC;
