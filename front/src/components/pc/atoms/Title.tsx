import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  font-weight: bold;
`;

interface Props {
  /**
   * XS とても小さい
   * S 小さい
   * M 中間
   * XM 少し大きい
   * L 大きい
   * XL とても大きい
   */
  readonly size: 'XS' | 'S' | 'M' | 'XM' | 'L' | 'XL';
  /** style */
  readonly style?: CSSProperties;
  readonly children: ReactNode;
}

/**
 * タイトル
 * ここのスタイルは変えない
 */
const Title: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  const fontSize = (): number => {
    switch (p.size) {
      case 'XS':
        return size.font.pc.l2;
      case 'S':
        return size.font.pc.l3;
      case 'M':
        return size.font.pc.l4;
      case 'XM':
        return size.font.pc.l5;
      case 'L':
        return size.font.pc.l6;
      case 'XL':
        return size.font.pc.l7;
      default:
        return 0;
    }
  };

  return (
    <Wrapper
      style={{
        color: color.text.mainBold,
        fontSize: fontSize(),
        ...p.style,
      }}
    >
      {p.children}
    </Wrapper>
  );
};

export default Title;
