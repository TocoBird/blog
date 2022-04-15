import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/sp/atoms/Spacer';
import Title from '@/components/sp/atoms/Title';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div`
  box-shadow: 0 0 12px #0f1c2c24;
`;
const Inner = styled.div`
  margin: auto;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Detail = styled.div`
  text-align: center;
`;
const CategoryFrame = styled.div`
  border-radius: ${size.ui.l3}px;
  border: 2px solid white;
  padding: ${size.ui.l4}px 0;
  font-weight: bold;
  font-size: ${size.font.pc.l3}px;
`;

/**
 * フッター上部のコンセプト
 */
const TopConcept: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.footer.conceptBackground,
        color: color.footer.text,
      }}
    >
      <Inner>
        <Spacer.L />

        <Title
          size="XL"
          style={{
            color: color.footer.text,
          }}
        >
          Blog Concept
        </Title>

        <Spacer.L />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          TocoBlogでは、下の抽象的な4つの分野を扱います。
        </Title>

        <Spacer.L />

        <Detail>
          <CategoryFrame>デザイン</CategoryFrame>
          <Spacer.M />
          <CategoryFrame>プロダクト設計</CategoryFrame>
          <Spacer.M />
          <CategoryFrame>チームビルディング</CategoryFrame>
          <Spacer.M />
          <CategoryFrame>経営</CategoryFrame>
        </Detail>

        <Spacer.L />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          実用を想定し、海外もキャッチアップした記事を発信します。
        </Title>

        <Spacer.L />
      </Inner>
    </Wrapper>
  );
};

export default TopConcept;
