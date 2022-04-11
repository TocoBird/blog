import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
const Detail = styled.div`
  color: ${colors.text.main};
`;

/**
 * 記事詳細：コンセプト説明
 */
const ArticleConcept: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Title.M>ブログのコンセプト</Title.M>

      <Spacer.M />

      <Detail>
        プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
      </Detail>
    </Wrapper>
  );
};

export default ArticleConcept;