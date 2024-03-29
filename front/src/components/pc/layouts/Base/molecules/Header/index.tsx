import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import SwitchColorMode from '@/components/pc/common/atoms/SwitchColorMode';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 2px 12px #0f1c2c24;
  width: 100%;
  box-sizing: border-box;
`;
const HeaderSpace = styled.div`
  height: 50px;
`;
const WrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  height: 100%;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Left = styled.div`
  height: 100%;
  display: flex;
`;
const LeftItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  opacity: 0.95;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const Right = styled.div`
  height: 100%;
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin-left: ${size.ui.l4}px;
  font-size: ${size.font.pc.l2}px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

/**
 * ヘッダー
 */
const Header: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <>
      <Wrapper
        style={{
          background: color.header.background,
        }}
      >
        <WrapperInner>
          <Left>
            <Link to="/">
              <LeftItem>
                <StaticImage
                  src="../../../../../images/TocoBlogLogo.svg"
                  alt="TocoBlog"
                  height={30}
                />
              </LeftItem>
            </Link>
            <SubTitle
              style={{
                color: '#ffffff70',
              }}
            >
              プロダクト開発の情報サイト
            </SubTitle>
          </Left>
          <Right>
            <IconWrapper>
              <SwitchColorMode />
            </IconWrapper>
          </Right>
        </WrapperInner>
      </Wrapper>

      <HeaderSpace />
    </>
  );
};

export default Header;
