import { styled } from 'linaria/react';
import React from 'react';
import Footer from '@/components/pc/layouts/Base/molecules/Footer';
import FooterInfo from '@/components/pc/layouts/Base/molecules/FooterInfo';
import Header from '@/components/pc/layouts/Base/molecules/Header';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div``;

interface Props {
  readonly children: JSX.Element | JSX.Element[];
}

/**
 * レイアウト
 */
const LayoutPC: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.site.background,
      }}
    >
      <Header />

      {p.children}

      <FooterInfo />

      <Footer />
    </Wrapper>
  );
};

export default LayoutPC;
