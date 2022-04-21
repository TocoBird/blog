import { styled } from 'linaria/react';
import React from 'react';
import Markdown from '@/components/pc/atoms/Markdown';
import { TagNode } from '@/modules/common/markdown';

const Wrapper = styled.div``;

interface Props {
  /** 記事内容 */
  readonly nodes: TagNode[];
}

/**
 * マークダウンの本文
 */
const BlogMarkdown: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <Markdown nodes={p.nodes} />
    </Wrapper>
  );
};

export default BlogMarkdown;
