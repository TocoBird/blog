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
 * テンプレート：プライバシーポリシー
 */
const TemplatePCPrivacyPolicy: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Inner
        style={{
          color: color.text.main,
        }}
      >
        <Spacer.XL />

        <Title size="L">プライバシーポリシー</Title>

        <Spacer.XL />

        <Title size="M">プライバシー情報の定義</Title>

        <Spacer.S />

        <Detail>
          「個人情報」とは、生存する個人に関して、以下のいずれかに該当するもののことを指します。
          <div>
            ・氏名、生年月日その他の記述等（または、特定の個人を識別することができるもの）
          </div>
          <div>・個人識別符号が含まれるもの</div>
        </Detail>

        <Spacer.L />

        <Title size="M">このサイトでの、個人情報の扱いについて</Title>

        <Spacer.S />

        <Detail>・お問い合わせ内容の保持</Detail>

        <Spacer.L />

        <Title size="M">個人情報保護方針</Title>

        <Spacer.S />

        <Detail>
          ・個人情報の取得と利用目的
          <div>
            お問い合わせに関する情報の保管、確認のため利用することがあります。これらの情報は、個人情報保護法等の関連法規及び本指針等に準拠したうえで、適正に取得するとともに、厳重に管理し、本指針等に規定する利用目的以外には、原則利用しません。
          </div>
          <Spacer.S />
          ・個人情報の取扱い
          <div>
            個人情報の取扱いにあたり事業の内容および規模を考慮し、適法かつ公正な手段で行います。また、本人に対して利用目的を明らかにし、目的外利用をしません。
          </div>
          <Spacer.S />
          ・個人情報の提供
          <div>
            当社は、本人の同意がある場合を除いて個人情報を第三者に提供することはいたしません。
          </div>
          <Spacer.S />
          ・法令・規範の遵守
          <div>
            日本国その他の国・地域の法令、指針その他の規範、慣習および社会的ルールに従います。
          </div>
          <Spacer.S />
          ・個人情報の適正な管理措置
          <div>
            個人情報の安全管理措置を講じ、個人情報の漏えい・滅失・毀損・紛失・改ざん・不正アクセス等の防止に努めるとともに常に改善に努めます。
            ・継続的改善
            （1）個人情報の適切な保護を確立・実施・維持・改善するために、定期的に「個人情報保護マネジメントシステム」を見直します。
            （2）従業者が個人情報保護の重要性を認識し、その管理および取扱いを適切に行なえるよう、個人情報保護に関する教育・啓発に努めます。
            （3）当社は、お客様のご意見も踏まえ、取得した個人情報の保護を図るためまたは法令その他の規範の改正に対応するために、本ポリシーを変更することがあります。変更した場合は、当社のホームページにて公表いたします。
          </div>
        </Detail>

        <Spacer.XL />
      </Inner>
    </Wrapper>
  );
};

export default TemplatePCPrivacyPolicy;
