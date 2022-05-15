import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  background-image: url('@/images/TocoBridBlogTopHeader.jpg');
  height: 400px;
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
  font-size: ${size.font.sp.l5}px;
  font-weight: bold;
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
          src="../../../../../images/TocoBlogLogo.png"
          alt="TocoBlog"
          height={50}
        />

        <Spacer.S />

        <TitleSub
          style={{
            color: color.text.onImage,
          }}
        >
          プロダクト開発の問題を
          <br />
          記事で具体的に解決
        </TitleSub>
      </Inner>
    </Wrapper>
  );
};

export default TopHeader;
