import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  position: relative;
  background-image: url('@/images/TocoBlogTopHeadBg.jpg');
  height: 600px;
  background-size: cover;
  background-position: 50% 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inner = styled.div`
  text-align: center;
  img {
    filter: drop-shadow(0px 4px 2px #0000000a);
  }
`;
const TitleSub = styled.div`
  font-size: ${size.font.pc.l7}px;
  font-weight: bold;
  text-shadow: 0 1px 2px #0000001a;
`;

/**
 * トップページ：上部
 */
const TopHeader: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Inner>
        <StaticImage
          src="../../../../../images/TocoBlogLogoTop.svg"
          alt="TocoBlog"
          height={160}
        />

        <Spacer.S />

        <TitleSub
          style={{
            color: color.text.onImage,
          }}
        >
          プロダクトの問題を記事で解決
        </TitleSub>
      </Inner>
    </Wrapper>
  );
};

export default TopHeader;
