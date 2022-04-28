import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  font-weight: bold;
  font-size: ${size.font.sp.l3}px;
  border-radius: 50px;
  padding: 8px 20px;
  text-align: center;
  box-shadow: 0 2px 8px #0f1c2c38;
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  /** アクティブかどうか */
  readonly isActive?: boolean;
  readonly children: ReactNode;
}

/**
 * ボタン: カテゴリ
 */
const ButtonCategory: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const border = p.isActive
    ? `2px solid #3291ba`
    : `2px solid ${color.button.border}`;

  return (
    <Wrapper
      style={{
        background: color.button.background,
        color: color.button.text,
        border,
        boxShadow: p.isActive ? '0 2px 12px #0f396c7d' : '0 2px 8px #0f1c2c38',
        ...p.style,
      }}
    >
      {p.children}
    </Wrapper>
  );
};

export default ButtonCategory;
