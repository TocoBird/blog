import React from 'react';
import { CookiesProvider } from 'react-cookie';
import HTMLHead from '@/components/layouts/HTMLHead';
import LayoutPC from '@/components/pc/layouts/Base';
import LayoutSP from '@/components/sp/layouts/Base';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

interface Props {
  readonly pc: JSX.Element;
  readonly sp: JSX.Element;
  readonly option: MetaOption;
}

/**
 * レイアウト
 */
const Layout: React.FC<Props> = (p: Props): JSX.Element => {
  const { isPC } = useResponsive();

  return (
    <CookiesProvider>
      <div>
        <HTMLHead option={p.option} />

        <div>{isPC && <LayoutPC>{p.pc}</LayoutPC>}</div>
        <div>{!isPC && <LayoutSP>{p.sp}</LayoutSP>}</div>
      </div>
    </CookiesProvider>
  );
};

export default Layout;
