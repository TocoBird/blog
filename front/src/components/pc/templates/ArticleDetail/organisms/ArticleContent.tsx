import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import Markdown from '@/components/pc/atoms/Markdown';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';
import { Node } from '@/modules/common/markdown';

const Wrapper = styled.div``;
const Author = styled.div`
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const MarkdownWrapper = styled.div`
  img {
    width: 100%;
  }
`;

interface Props {
  /** 記事内容 */
  readonly nodes: Node[];
}

/**
 * 記事詳細：本文
 */
const ArticleContent: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <MarkdownWrapper>
        <Markdown nodes={p.nodes} />
      </MarkdownWrapper>

      <Spacer.S />

      <Author
        style={{
          color: color.text.mainThin,
        }}
      >
        <Icon icon={faPenNib} />
        作者 tocotoco
      </Author>
    </Wrapper>
  );
};

export default ArticleContent;
