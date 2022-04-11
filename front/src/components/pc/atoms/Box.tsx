import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  /** paddingの余白 */
  readonly size: 'M' | 'L';
  readonly children: ReactNode;
}

/**
 * コンテンツの背景
 */
const Box: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const padding = p.size === 'M' ? size.ui.l6 : size.ui.l10;

  return (
    <Wrapper
      style={{
        background: color.box.background,
        padding,
        ...p.style,
      }}
    >
      {p.children}
    </Wrapper>
  );
};

export default Box;
