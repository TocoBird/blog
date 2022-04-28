import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'linaria/react';
import React from 'react';
import Box from '@/components/pc/atoms/Box';
import Spacer from '@/components/pc/atoms/Spacer';
import LabelTitle from '@/components/pc/molecules/LabelTitle';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div``;

/**
 * コンセプト説明
 */
const BlogConcept: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <LabelTitle size="XM" icon={faLightbulb}>
        ブログのコンセプト
      </LabelTitle>

      <Spacer.XM />

      <Box
        size="M"
        style={{
          color: color.text.main,
        }}
      >
        プロダクト開発の効率を最大限に上げるため、
        <br />
        様々な手法やアイデアなどを発信します。
      </Box>
    </Wrapper>
  );
};

export default BlogConcept;
