import React from 'react';
import { useColor } from '@/modules/common/colors';

/**
 * 線
 */
const Bar: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <div
      style={{
        height: 1,
        background: color.bar.background,
      }}
    />
  );
};

export default Bar;
