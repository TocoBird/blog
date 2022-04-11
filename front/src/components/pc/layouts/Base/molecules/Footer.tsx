import { styled } from 'linaria/react';
import React from 'react';
import colors from '@/modules/common/colors';

const Wrapper = styled.div`
  background: ${colors.footer.background};
  color: ${colors.footer.text};
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
