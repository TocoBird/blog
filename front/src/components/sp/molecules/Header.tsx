import React from 'react';
import { styled } from 'linaria/react';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  background: #1d2f4df2;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 2px 12px #0f1c2c24;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`;
const HeaderSpace = styled.div`
  height: 50px;
`;
const Left = styled.div`
  a {
    color: white;
  }
}`;
const Right = styled.div`
  color: #fff28b;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

/**
 * ヘッダー
 */
const Header: React.FC = (): JSX.Element => {
  const onClickDarkMode = () => {};

  return (
    <>
      <Wrapper>
        <Left>
          <Link to="/">TocoBlog</Link>
        </Left>
        <Right>
          <div onClick={onClickDarkMode}>#</div>
        </Right>
      </Wrapper>

      <HeaderSpace />
    </>
  );
};

export default Header;
