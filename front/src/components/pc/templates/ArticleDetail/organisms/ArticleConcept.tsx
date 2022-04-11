import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div``;
const Detail = styled.div``;

/**
 * 記事詳細：コンセプト説明
 */
const ArticleConcept: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Title size="M">ブログのコンセプト</Title>

      <Spacer.M />

      <Detail
        style={{
          color: color.text.main,
        }}
      >
        プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
      </Detail>
    </Wrapper>
  );
};

export default ArticleConcept;
