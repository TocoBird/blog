import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  font-weight: bold;
  font-size: ${size.font.pc.l3}px;
  border-radius: 50px;
  padding: ${size.ui.l3}px ${size.ui.l10}px;
  text-align: center;
  box-sizing: border-box;
  transition: 0.2s;
  box-shadow: 0 2px 24px #0f1c2c12;
  &:hover {
    opacity: 0.85;
    box-shadow: 0 8px 16px #0f1c2c15;
  }
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  readonly children: ReactNode;
}

/**
 * ボタン: 控えめな見た目
 */
const ButtonSub: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.buttonSub.background,
        color: color.buttonSub.text,
        ...p.style,
      }}
    >
      {p.children}
    </Wrapper>
  );
};

export default ButtonSub;
