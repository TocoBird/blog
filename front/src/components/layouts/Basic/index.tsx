import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { useHooks } from './hooks';
import HTMLHead from '@/components/layouts/HTMLHead';
import LayoutPC from '@/components/pc/layouts/Base';
import LayoutSP from '@/components/sp/layouts/Base';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

interface Props {
  readonly pc: JSX.Element;
  readonly sp: JSX.Element;
  readonly option: MetaOption;
}

/**
 * 共通のLayout
 */
const Layout: React.FC<Props> = (p: Props): JSX.Element => {
  const { isPC, isDidMounted } = useHooks();

  return (
    <CookiesProvider>
      <div>
        <HTMLHead option={p.option} />

        {isDidMounted && (
          <>
            <div>{isPC && <LayoutPC>{p.pc}</LayoutPC>}</div>
            <div>{!isPC && <LayoutSP>{p.sp}</LayoutSP>}</div>
          </>
        )}
      </div>
    </CookiesProvider>
  );
};

export default Layout;
