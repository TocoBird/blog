import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Spacer from '@/components/pc/atoms/Spacer';
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
    font-size: ${size.font.pc.l5}px;
    color: ${colors.text.mainBoldThin};
    font-weight: bold;
    padding-bottom: 12px;
    border-bottom: solid 2px ${colors.border.h1};
    margin-bottom: 20px;
  }
  h1:after {
    position: absolute;
    content: ' ';
    display: block;
    border-bottom: solid 2px ${colors.border.h1Accent};
    bottom: -2px;
    left: 0;
    width: 50%;
  }
  h2 {
    font-size: ${size.font.pc.l4}px;
    color: ${colors.text.mainBoldAccent};
    margin-bottom: 12px;
    border-bottom: 1px solid ${colors.border.h2};
    padding-bottom: 12px;
    border-left: 8px solid ${colors.border.h2Left};
    padding-left: 14px;
  }
  h3 {
    font-size: ${size.font.pc.l4}px;
    color: ${colors.text.mainBold};
    margin-bottom: 12px;
  }
  p {
    font-size: ${size.font.pc.l3}px;
    color: ${colors.text.main};
    white-space: pre-line;
    line-height: 32px;
    padding-bottom: 40px;
  }
  img {
    width: 100%;
  }
  a {
    color: ${colors.text.link};
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
