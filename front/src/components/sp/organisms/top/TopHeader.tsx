import React from 'react';
import { styled } from 'linaria/react';
import { StaticImage } from 'gatsby-plugin-image';
import { SpacerS } from '../../atoms/Spacer';

const Wrapper = styled.div`
  background: whitesmoke;
  background-image: url('../../../../images/TocoBridBlogTopHeader.jpg');
  height: 400px;
  background-size: cover;
  background-position: 50% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div``;
const Inner = styled.div`
  text-align: center;
`;
const TitleSub = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

/**
 * トップページ：上部
 */
const TopHeader: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Inner>
        <Title>
          <StaticImage
            src="../../../../images/TocoBlogLogo.png"
            alt="TocoBlog"
            height={50}
          />
        </Title>

        <SpacerS />

        <TitleSub>プロダクト開発の情報を発信</TitleSub>
      </Inner>
    </Wrapper>
  );
};

export default TopHeader;
