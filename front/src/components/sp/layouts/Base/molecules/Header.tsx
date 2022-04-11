import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  background: linear-gradient(45deg, #232731f4, #121a2df4);
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
const Left = styled.div``;
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
      </Wrapper>

      <HeaderSpace />
    </>
  );
};

export default Header;
