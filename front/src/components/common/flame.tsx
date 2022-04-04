import React from 'react';
import HTMLHead from './head';
import LayoutPC from '../pc/layouts/base';
import LayoutSP from '../sp/layouts/base';
import { MetaOption } from '../../modules/interfaces/compornent/layout';

interface Props {
  readonly children: JSX.Element | JSX.Element[];
  readonly isPC: boolean;
  readonly option: MetaOption;
}

/***
 * レイアウト
 */
const Frame: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <HTMLHead option={p.option} />

      {p.isPC ? (
        <LayoutPC>{p.children}</LayoutPC>
      ) : (
        <LayoutSP>{p.children}</LayoutSP>
      )}
    </>
  );
};

export default Frame;
