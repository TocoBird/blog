import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { useHooks } from '@/components/pc/templates/ArticleDetail/organisms/ArticleTableOfContents/hooks';
import { useColor } from '@/modules/common/colors';
import { TagNode } from '@/modules/common/markdown';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Detail = styled.div``;
const A = styled.a`
  font-size: ${size.font.pc.l2}px;
  font-weight: 500;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;
const Ah2 = styled(A)`
  padding-left: ${size.ui.l2}px;
  font-size: ${size.font.pc.l1}px;
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
  const { hs } = useHooks(p.nodes);

  return (
    <Wrapper>
      <LabelTitle size="M" icon={faClipboardList}>
        目次
      </LabelTitle>

      <Spacer.M />

      {hs.map((t, index: number) => (
        <Detail key={`${t.text}_${index}`}>
          {index !== 0 && <Spacer.S />}

          {t.size === 1 && (
            <A
              href={`#${t.id}`}
              rel="noopener noreferrer"
              style={{
                color: color.text.link,
              }}
            >
              {t.num}.{t.text}
            </A>
          )}

          {t.size === 2 && (
            <Ah2
              href={`#${t.id}`}
              rel="noopener noreferrer"
              style={{
                color: color.text.link,
              }}
            >
              ・{t.text}
            </Ah2>
          )}
        </Detail>
      ))}
    </Wrapper>
  );
};

export default ArticleTableOfContents;
