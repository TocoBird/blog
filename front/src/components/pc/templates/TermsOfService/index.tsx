import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import ContentCenter from '@/components/pc/common/frames/ContentCenter';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div``;
const Detail = styled.div``;
const Inner = styled(ContentCenter)``;

/**
 * テンプレート：利用規約
 */
const TemplatePCTermsOfService: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Inner
        style={{
          color: color.text.main,
        }}
      >
        <Spacer.XL />

        <Title size="L">利用規約</Title>

        <Spacer.XL />

        <Title size="M">外部リンクについて</Title>

        <Spacer.S />

        <Detail>
          <div>
            当サイト上のリンク先にある外部サイト情報に関しての責任、あるいはその内容から発生するあらゆる問題に関して当サイトは責任を負いません。
          </div>
        </Detail>

        <Spacer.L />

        <Title size="M">このサイトをリンクすることについて</Title>

        <Spacer.S />

        <Detail>
          以下のサイトから、当サイトをリンクすることはしないでください。
          <div>・公序良俗に反する内容や違法に関与したサイトからのリンク</div>
          <div>・その他当サイトが不適切と判断する場面からのリンク</div>
        </Detail>

        <Spacer.L />

        <Title size="M">著作権について</Title>

        <Spacer.S />

        <Detail>
          当サイト上の文章やその他著作物は、著作権、特許権、商標権その他の権利により保護されております。
          事前の許可なしに、二次的著作物の作成、譲渡あるいは販売などを行うことはできません。
        </Detail>

        <Spacer.L />

        <Title size="M">クッキーについて</Title>

        <Spacer.S />

        <Detail>
          <div>
            ・サイトのカラーモード（ダークモードかライトモード）にのみ使用しています。
          </div>
        </Detail>

        <Spacer.XL />
      </Inner>
    </Wrapper>
  );
};

export default TemplatePCTermsOfService;
