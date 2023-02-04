import { faBook } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/common/atoms/Spacer';
import LabelTitle from '@/components/pc/common/molecules/LabelTitle';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Detail = styled.div`
  font-weight: 500;
  white-space: pre-line;
  font-size: ${size.font.pc.l2}px;
  line-height: 36px;
`;

interface Props {
  /** カテゴリ一覧 */
  readonly text: string;
}

/**
 * 記事詳細：ブログ情報
 */
const ArticleInfo: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <LabelTitle size="M" icon={faBook}>
        この記事の目的
      </LabelTitle>

      <Spacer.M />

      <Detail style={{ color: color.text.main }}>{p.text}</Detail>
    </Wrapper>
  );
};

export default ArticleInfo;
