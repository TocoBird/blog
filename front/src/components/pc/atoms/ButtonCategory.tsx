import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  font-weight: bold;
  border-radius: 50px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-shadow: 0 2px 8px #0f1c2c38;
  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  readonly children: ReactNode;
}
/**
 * ボタン: カテゴリ
 */
const ButtonCategory: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.button.background,
        color: color.button.text,
        ...p.style,
      }}
    >
      {p.children}
    </Wrapper>
  );
};

export default ButtonCategory;
