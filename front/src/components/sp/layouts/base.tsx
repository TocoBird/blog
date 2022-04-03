import React from 'react';
import Header from '../molecules/Header';

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
    </>
  );
};

export default LayoutSP;
