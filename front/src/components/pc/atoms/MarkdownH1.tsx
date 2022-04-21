import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const H1 = styled.h1`
  position: relative;
  font-size: ${size.font.pc.l5}px;
  font-weight: bold;
  padding-bottom: 20px;
  margin-bottom: 24px;
  :before {
    content: '';
    display: block;
    height: 6rem;
    margin-top: -6rem;
  }
`;
const H1Border = styled.div`
  position: absolute;
  height: 2px;
  bottom: -2px;
  width: 50%;
  left: 0;
`;

interface Props {
  readonly id: string;
  readonly text: string;
}

/**
 * マークダウン: H1タイトル
 */
const Bar: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <H1
      id={p.id}
      style={{
        color: color.text.mainBoldThin,
        borderBottom: `solid 2px ${color.border.h1}`,
      }}
    >
      <H1Border
        style={{
          background: color.border.h1Accent,
        }}
      />
      {p.text}
    </H1>
  );
};

export default Bar;
