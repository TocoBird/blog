import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import { useColor } from '@/modules/common/colors';
import { TagNode, TagH } from '@/modules/common/markdown';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Detail = styled.div``;
const A = styled.a`
  font-size: ${size.font.pc.l2}px;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;

interface Props {
  /** 記事内容 */
  readonly nodes: TagNode[];
}

/**
 * 記事詳細：目次
 */
const ArticleTableOfContents: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const h1s = p.nodes.filter(n => n.type === 'h' && n.size === 1) as TagH[];

  return (
    <Wrapper>
      <Title size="M">目次</Title>

      <Spacer.M />

      {h1s.map((h: TagH, index: number) => (
        <Detail key={`${h.text}_${index}`}>
          {index !== 0 && <Spacer.S />}

          <A
            href={`#${h.id}`}
            rel="noopener noreferrer"
            style={{
              color: color.text.link,
            }}
          >
            ・{h.text}
          </A>
        </Detail>
      ))}
    </Wrapper>
  );
};

export default ArticleTableOfContents;
