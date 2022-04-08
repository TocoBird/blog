import React from 'react';
import Header from '@/components/pc/layouts/Base/molecules/Header';
import Footer from '@/components/pc/layouts/Base/molecules/Footer';

interface Props {
  readonly children: JSX.Element | JSX.Element[];
}

/**
 * レイアウト
 */
const LayoutPC: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <Header />

      {p.children}

      <Footer />
    </>
  );
};

export default LayoutPC;
