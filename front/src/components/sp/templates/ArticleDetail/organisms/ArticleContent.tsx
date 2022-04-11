import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Spacer from '@/components/sp/atoms/Spacer';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Author = styled.div`
  color: ${colors.text.mainThin};
  font-weight: 500;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 4px;
`;
const Markdown = styled.div`
  h1 {
    position: relative;
    font-size: ${size.font.sp.l4}px;
    font-weight: bold;
    padding-bottom: 14px;
    color: #182c55;
    border-bottom: solid 2px #e8efff;
    margin-bottom: 16px;
  }
  h1:after {
    position: absolute;
    content: ' ';
    display: block;
    border-bottom: solid 2px #c6d8f4;
    bottom: -2px;
    width: 50%;
  }
  h2 {
    color: #111a2f;
    margin-bottom: 12px;
    font-size: ${size.font.sp.l4}px;
    border-bottom: 1px solid #e7eaf0;
    padding-bottom: 12px;
    border-left: 4px solid #b4c2f8;
    padding-left: 14px;
  }
  h3 {
    font-size: ${size.font.pc.l3}px;
    margin-bottom: 12px;
  }
  p {
    white-space: pre-line;
    line-height: 26px;
    font-size: ${size.font.sp.l3}px;
    padding-bottom: 24px;
    color: #3c475f;
  }
  img {
    width: 100%;
  }
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
      <Markdown>
        <ReactMarkdown>{p.text}</ReactMarkdown>
      </Markdown>

      <Spacer.S />

      <Author>
        <Icon icon={faPenNib} />
        作者 tocotoco
      </Author>
    </Wrapper>
  );
};

export default ArticleContent;
