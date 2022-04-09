import React from 'react';
// import React, { useState } from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import size from '@/modules/common/size';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  background: #232a39f5;
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
  a {
    color: white;
  }
`;
const LeftItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Right = styled.div`
  color: #fff28b;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
// const Icon = styled(FontAwesomeIcon)``;

/**
 * ヘッダー
 */
const Header: React.FC = (): JSX.Element => {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // const onClickDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <>
      <Wrapper>
        <WrapperInner>
          <Left>
            <Link to="/">
              <LeftItem>
                <StaticImage
                  src="../../../../../images/TocoBlogLogo.png"
                  alt="TocoBlog"
                  height={30}
                />
              </LeftItem>
            </Link>
          </Left>
          <Right>
            {/* <div onClick={onClickDarkMode}>
              <Icon icon={faMoon} />
            </div> */}
          </Right>
        </WrapperInner>
      </Wrapper>

      <HeaderSpace />
    </>
  );
};

export default Header;
