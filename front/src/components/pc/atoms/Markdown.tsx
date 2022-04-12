import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';
import { TagNode } from '@/modules/common/markdown';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const H1 = styled.h1`
  position: relative;
  font-size: ${size.font.pc.l5}px;
  font-weight: bold;
  padding-bottom: 12px;
  margin-bottom: 20px;
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
`;
const Strong = styled.strong``;
const Img = styled.img`
  width: 100%;
`;
const A = styled.a``;

interface Props {
  /** テキスト */
  readonly nodes: TagNode[];
}

/**
 * マークダウン
 * 簡易的にやってしまう。後々ライブラリ入れて正確にする。
 */
const Markdown: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      {p.nodes.map((n, index: number) => {
        const key = `node_id_${index}`;

        if (n.type === 'br') return <br key={key} />;

        if (n.type === 'spacer') return <Spacer.L key={key} />;

        if (n.type === 'img') return <Img key={key} src={n.src} alt={n.alt} />;

        if (n.type === 'p') {
          if (n.inlines)
            return (
              <P
                key={key}
                style={{
                  color: color.text.main,
                }}
              >
                {n.inlines.map((ni, indexP: number) => {
                  const k = `node_inline_id_${indexP}`;

                  if (ni.type === 'strong')
                    return <Strong key={k}>{ni.text}</Strong>;

                  // span
                  return <Fragment key={k}>{ni.text}</Fragment>;
                })}
              </P>
            );

          return (
            <P
              key={key}
              style={{
                color: color.text.main,
              }}
            >
              {n.text}
            </P>
          );
        }

        if (n.type === 'a')
          return (
            <A
              key={key}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: color.text.link,
              }}
            >
              {n.text}
            </A>
          );

        if (n.type === 'h') {
          if (n.size === 1)
            return (
              <H1
                key={key}
                id={n.id}
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
                {n.text}
              </H1>
            );

          if (n.size === 2)
            return (
              <H2
                key={key}
                id={n.id}
                style={{
                  color: color.text.mainBoldAccent,
                  borderBottom: `1px solid ${color.border.h2}`,
                  borderLeft: `4px solid ${color.border.h2Left}`,
                }}
              >
                {n.text}
              </H2>
            );

          if (n.size === 3)
            return (
              <H3
                key={key}
                id={n.id}
                style={{
                  color: color.text.mainBold,
                }}
              >
                {n.text}
              </H3>
            );

          if (n.size === 4)
            return (
              <H4 key={key} id={n.id}>
                {n.text}
              </H4>
            );

          if (n.size === 5)
            return (
              <H5 key={key} id={n.id}>
                {n.text}
              </H5>
            );

          return (
            <H6 key={key} id={n.id}>
              {n.text}
            </H6>
          );
        }
      })}

      <Spacer.XL />
    </Wrapper>
  );
};

export default Markdown;
