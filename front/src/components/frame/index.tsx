import { styled } from 'linaria/react';
import React from 'react';
import HTMLHead from '@/components/frame/Head';
import LayoutPC from '@/components/pc/layouts/Base';
import LayoutSP from '@/components/sp/layouts/Base';
import colors from '@/modules/common/colors';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

const Wrapper = styled.div`
  background: ${colors.site.background};
`;

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
    <Wrapper>
      <HTMLHead option={p.option} />

      <div>{p.isPC && <LayoutPC>{p.children}</LayoutPC>}</div>
      <div>{!p.isPC && <LayoutSP>{p.children}</LayoutSP>}</div>
    </Wrapper>
  );
};

export default Frame;
