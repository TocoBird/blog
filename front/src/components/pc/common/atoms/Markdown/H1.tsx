import { styled } from 'linaria/react';
import React from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const H1 = styled.h1`
  position: relative;
  font-size: ${size.font.pc.l5}px;
  font-weight: bold;
  margin-left: -56px;
  padding-left: 56px;
  padding-top: ${size.ui.l4}px;
  padding-bottom: ${size.ui.l4}px;
  margin-bottom: ${size.ui.l6}px;

  &:before {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    border: none;
    border-bottom: solid ${size.ui.l4}px transparent;
    border-right: solid ${size.ui.l4}px #4e89d8;
  }
`;
const LinkBefore = styled.div`
  position: absolute;
  height: 6rem;
  top: -6rem;
`;
const H1Border = styled.div`
  position: absolute;
  border-radius: 5px;
  height: 4px;
  bottom: -2px;
  width: 53.5%;
  left: 0;
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
      style={{
        color: color.text.mainBoldThin,
        borderBottom: `solid 2px ${color.border.h1}`,
        background: color.hTag.backgroundH1,
      }}
    >
      <LinkBefore id={p.id} />

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
