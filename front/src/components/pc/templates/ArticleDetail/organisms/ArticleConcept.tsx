import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import LabelTitle from '@/components/pc/templates/ArticleDetail/molecules/LabelTitle';
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
      <LabelTitle size="M" icon={faLightbulb}>
        ブログのコンセプト
      </LabelTitle>

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
