import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import Title from '@/components/pc/atoms/Title';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  box-shadow: 0 0 12px #0f1c2c24;
`;
const Inner = styled.div`
  margin: auto;
  height: 100%;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const CategoryFrame = styled.div`
  width: 22.5%;
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
        <Spacer.XXL />

        <Title
          size="XL"
          style={{
            color: color.footer.text,
            borderBottom: '1px solid #ffffff1c',
            paddingBottom: size.ui.l6,
          }}
        >
          Blog Concept
        </Title>

        <Spacer.XXL />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          TocoBlogでは、下の抽象的な4つの分野を扱います。
        </Title>

        <Spacer.XXL />

        <Detail>
          <CategoryFrame>デザイン</CategoryFrame>
          <CategoryFrame>プロダクト設計</CategoryFrame>
          <CategoryFrame>チームビルディング</CategoryFrame>
          <CategoryFrame>経営</CategoryFrame>
        </Detail>

        <Spacer.XXL />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          実用を想定し、海外もキャッチアップした記事を発信します。
        </Title>

        <Spacer.XXL />
      </Inner>
    </Wrapper>
  );
};

export default TopConcept;
