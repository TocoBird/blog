import React from 'react';
import { styled } from 'linaria/react';
import ReactMarkdown from 'react-markdown';
import { SpacerS } from '../../atoms/Spacer';
import colors from '../../../../modules/common/colors';

const Wrapper = styled.div``;
const Author = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;

interface Props {
  /** ブログ内容 */
  readonly text: string;
}

/**
 * 記事詳細：本文
 */
const ArticleContent: React.FC<Props> = (p: Props): JSX.Element => {
  return (
    <Wrapper>
      <div className="blogMarkdownPC">
        <ReactMarkdown>{p.text}</ReactMarkdown>
      </div>

      <SpacerS />

      <Author>作者 tocotoco</Author>
    </Wrapper>
  );
};

export default ArticleContent;
