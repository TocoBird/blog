import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const H1 = styled.h1`
  position: relative;
  font-size: ${size.font.sp.l4}px;
  font-weight: bold;
  padding-bottom: 16px;
  margin-bottom: 20px;
`;
const H1Border = styled.div`
  position: absolute;
  border-radius: 5px;
  height: 4px;
  bottom: -2px;
  width: 50%;
`;

interface Props {
  readonly id: string;
  readonly text: string;
}

/**
 * マークダウン: H1タイトル
 */
const MarkdownH1: React.FC<Props> = (p: Props): JSX.Element => {
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

export default MarkdownH1;
