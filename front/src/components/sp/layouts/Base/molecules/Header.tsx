import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import { useHookHeader } from '@/components/sp/layouts/Base/molecules/hooks';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.header`
  position: fixed;
  z-index: 99;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 2px 12px #0f1c2c24;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
`;
const HeaderSpace = styled.div`
  height: 50px;
`;
const Left = styled.div`
  display: flex;
`;
const LeftItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  opacity: 0.95;
`;
const SubTitle = styled.div`
  font-weight: bold;
  margin-left: ${size.ui.l3}px;
  font-size: ${size.font.sp.l1}px;
`;
const Right = styled.div`
  height: 100%;
`;
const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: ${size.font.sp.l5}px;
`;

/**
 * ヘッダー
 */
const Header: React.FC = (): JSX.Element => {
  const { isLight, onClickDarkMode } = useHookHeader();
  const { color } = useColor();

  return (
    <>
      <Wrapper
        style={{
          background: color.header.background,
        }}
      >
        <Left>
          <Link to="/">
            <LeftItem>
              <StaticImage
                src="../../../../../images/TocoBlogLogo.svg"
                alt="TocoBlog"
                height={30}
                style={{
                  color: color.text.onImage,
                }}
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
          <IconWrapper onClick={onClickDarkMode}>
            <Icon
              icon={isLight ? faMoon : faSun}
              style={{
                color: color.colorMode.iconMark,
              }}
            />
          </IconWrapper>
        </Right>
      </Wrapper>

      <HeaderSpace />
    </>
  );
};

export default Header;
