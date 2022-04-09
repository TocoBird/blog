import React from 'react';
import Header from '@/components/sp/layouts/Base/molecules/Header';
import Footer from '@/components/sp/layouts/Base/molecules/Footer';

interface Props {
  readonly children: JSX.Element | JSX.Element[];
}

/**
 * レイアウト
 */
const LayoutSP: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <Header />

      {p.children}

      <Footer />
    </>
  );
};

export default LayoutSP;
