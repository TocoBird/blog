import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import LabelTitle from '@/components/sp/molecules/LabelTitle';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div``;
const Detail = styled.div`
  font-size: ${size.font.sp.l3}px;
`;

/**
 * コンセプト説明
 */
const BlogConcept: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <LabelTitle size="M" icon={faLightbulb}>
        ブログのコンセプト
      </LabelTitle>

      <Spacer.S />

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

export default BlogConcept;
