import React from 'react';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  background: #0b1c31;
  color: white;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

/**
 * フッター
 */
const Footer: React.FC = (): JSX.Element => {
  return <Wrapper>©︎ tocobird</Wrapper>;
};

export default Footer;
