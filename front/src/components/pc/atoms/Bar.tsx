import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  height: 1px;
`;

/**
 * 線
 */
const Bar: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.bar.background,
      }}
    />
  );
};

export default Bar;
