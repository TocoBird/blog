import React from 'react';
import Markdown from '@/components/pc/atoms/Markdown';
import { TagNode } from '@/modules/common/markdown';

interface Props {
  /** 記事内容 */
  readonly nodes: TagNode[];
}

/**
 * マークダウンの本文
 */
const BlogMarkdown: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <div>
      <Markdown nodes={p.nodes} />
    </div>
  );
};

export default BlogMarkdown;
