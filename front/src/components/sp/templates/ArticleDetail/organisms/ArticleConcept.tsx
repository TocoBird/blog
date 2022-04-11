import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: ${size.font.sp.l3}px;
`;

/**
 * 記事詳細：コンセプト説明
 */
const ArticleConcept: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Title.M>ブログのコンセプト</Title.M>

      <Spacer.S />

      <Detail>
        プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
      </Detail>
    </Wrapper>
  );
};

export default ArticleConcept;