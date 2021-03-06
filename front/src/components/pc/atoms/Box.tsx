import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  border-radius: ${size.ui.l1}px;
  box-shadow: 0 2px 24px #0f1c2c12;
  padding: ${size.ui.l6}px;
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  /** paddingの余白 */
  readonly size: 'S' | 'M' | 'L';
  readonly children: ReactNode;
}

/**
 * コンテンツの背景
 */
const Box: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const getSize = (): number => {
    if (p.size === 'S') return size.ui.l4;
    if (p.size === 'M') return size.ui.l6;
    if (p.size === 'L') return size.ui.l10;
    return 0;
  };
  const padding = getSize();

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
