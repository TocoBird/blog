import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div`
  background: ${colors.image.loadBackground};
  background-image: url('@/images/TocoBridBlogTopHeader.jpg');
  height: 600px;
  background-size: cover;
  background-position: 50% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inner = styled.div`
  text-align: center;
`;
const TitleSub = styled.div`
  font-size: ${size.font.pc.l7}px;
  font-weight: bold;
  color: ${colors.text.onImage};
`;

/**
 * トップページ：上部
 */
const TopHeader: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Inner>
        <StaticImage
          src="../../../../../images/TocoBlogLogo.png"
          alt="TocoBlog"
          height={160}
        />

        <Spacer.S />

        <TitleSub>プロダクト開発の情報を発信</TitleSub>
      </Inner>
    </Wrapper>
  );
};

export default TopHeader;
