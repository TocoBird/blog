import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import colors from '@/modules/common/colors';

const Wrapper = styled.div``;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: 15px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.text.mainBold};
`;

/**
 * 記事詳細：コンセプト説明
 */
const ArticleConcept: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>ブログのコンセプト</Title>

      <Spacer.S />

      <Detail>
        プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
      </Detail>
    </Wrapper>
  );
};

export default ArticleConcept;
