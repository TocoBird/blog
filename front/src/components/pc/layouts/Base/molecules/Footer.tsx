import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

/**
 * フッター
 */
const Footer: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.footer.background,
        color: color.footer.text,
      }}
    >
      ©︎ TocoBird
    </Wrapper>
  );
};

export default Footer;
