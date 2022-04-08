import React from 'react';
import HTMLHead from '@/components/flame/Head';
import LayoutPC from '@/components/pc/layouts/Base';
import LayoutSP from '@/components/sp/layouts/Base';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

interface Props {
  readonly children: JSX.Element | JSX.Element[];
  readonly isPC: boolean;
  readonly option: MetaOption;
}

/***
 * レイアウト
 */
const Flame: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <>
      <HTMLHead option={p.option} />

      <div>{p.isPC && <LayoutPC>{p.children}</LayoutPC>}</div>
      <div>{!p.isPC && <LayoutSP>{p.children}</LayoutSP>}</div>
    </>
  );
};

export default Flame;
