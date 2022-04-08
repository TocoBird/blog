import React from 'react';
import { styled } from 'linaria/react';
import { SpacerM } from '@/components/pc/atoms/Spacer';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: ${size.font.l4}px;
  color: ${colors.text.mainBold};
`;
const Detail = styled.div`
  color: ${colors.text.main};
  font-size: 16px;
`;
/**
 * 記事詳細：コンセプト説明
 */
const ArticleConcept: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Title>ブログのコンセプト</Title>

      <SpacerM />

      <Detail>
        プロダクト開発の効率を最大限に上げるため、様々な手法やアイデアなどを発信します。
      </Detail>
    </Wrapper>
  );
};

export default ArticleConcept;
