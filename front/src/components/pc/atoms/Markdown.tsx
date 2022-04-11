import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const H1 = styled.h1`
  position: relative;
  font-size: ${size.font.pc.l5}px;
  font-weight: bold;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;
const H1Border = styled.div`
  position: absolute;
  height: 2px;
  bottom: -2px;
  width: 50%;
  left: 0;
`;
const H2 = styled.h2`
  font-size: ${size.font.pc.l4}px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
`;
const H3 = styled.h3`
  font-size: ${size.font.pc.l4}px;
  margin-bottom: 12px;
`;
const H4 = styled.h4``;
const H5 = styled.h5``;
const H6 = styled.h6``;
const P = styled.p`
  font-size: ${size.font.pc.l3}px;
  white-space: pre-line;
  line-height: 32px;
  padding-bottom: 40px;
`;

interface Props {
  /** テキスト */
  readonly text: string;
}

/**
 * マークダウン
 */
const Markdown: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  const sharp = (line: string, key: string, num: number): JSX.Element => {
    const l = line.replace(/#/g, '');
    if (num === 1)
      return (
        <H1
          key={key}
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
          {l}
        </H1>
      );
    if (num === 2)
      return (
        <H2
          key={key}
          style={{
            color: color.text.mainBoldAccent,
            borderBottom: `1px solid ${color.border.h2}`,
            borderLeft: `4px solid ${color.border.h2Left}`,
          }}
        >
          {l}
        </H2>
      );
    if (num === 3)
      return (
        <H3
          key={key}
          style={{
            color: color.text.mainBold,
          }}
        >
          {l}
        </H3>
      );
    if (num === 4) return <H4 key={key}>{l}</H4>;
    if (num === 5) return <H5 key={key}>{l}</H5>;
    if (num === 6) return <H6 key={key}>{l}</H6>;

    return <H6 key={key}>{l}</H6>;
  };

  const adapter = (text: string): JSX.Element => {
    const strs = text.split('\n');

    const jsxs = strs.map((line: string, index: number): JSX.Element => {
      const key = `html_id_${index}`;

      if (line === '') return <br key={key} />;

      const sharpCount = line.match(/#/g)?.length || 0;
      if (sharpCount && sharpCount > 0) return sharp(line, key, sharpCount);

      return (
        <P
          key={key}
          style={{
            color: color.text.main,
          }}
        >
          {line}
        </P>
      );
    });

    return (
      <>
        {jsxs.map(
          (jsx: JSX.Element, index: number): JSX.Element => (
            <Fragment key={`id_${index}`}>{jsx}</Fragment>
          )
        )}
      </>
    );
  };

  return <Wrapper>{adapter(p.text)}</Wrapper>;
};

export default Markdown;
