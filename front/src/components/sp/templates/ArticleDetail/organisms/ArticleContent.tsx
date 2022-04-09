import { styled } from 'linaria/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Spacer from '@/components/sp/atoms/Spacer';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
const Author = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;

interface Props {
  /** 記事内容 */
  readonly text: string;
}

/**
 * 記事詳細：本文
 */
const ArticleContent: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <div className="blogMarkdownSP">
        <ReactMarkdown>{p.text}</ReactMarkdown>
      </div>

      <Spacer.S />

      <Author>作者 tocotoco</Author>
    </Wrapper>
  );
};

export default ArticleContent;
