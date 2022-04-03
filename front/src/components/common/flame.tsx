import React from 'react';
import HTMLHead from './head';
import LayoutPC from '../pc/layouts/base';
import LayoutSP from '../sp/layouts/base';

interface Props {
  readonly children: JSX.Element | JSX.Element[];
  readonly isPC: boolean;
}

/***
 * レイアウト
 */
const Frame: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <HTMLHead />

      {p.isPC ? (
        <LayoutPC>{p.children}</LayoutPC>
      ) : (
        <LayoutSP>{p.children}</LayoutSP>
      )}
    </>
  );
};

export default Frame;
