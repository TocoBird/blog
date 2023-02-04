import { styled } from 'linaria/react';
import React from 'react';
import Markdown from '@/components/sp/common/atoms/Markdown';
import { TagNode } from '@/modules/common/markdown';

const Wrapper = styled.div``;

interface Props {
  /** 記事内容 */
  readonly nodes: TagNode[];
}

/**
 * マークダウン: 本文
 */
const BlogContent: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Markdown nodes={p.nodes} />
    </Wrapper>
  );
};

export default BlogContent;
