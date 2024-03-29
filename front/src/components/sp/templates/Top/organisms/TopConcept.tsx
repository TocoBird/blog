import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { Fragment } from 'react';
import Spacer from '@/components/sp/common/atoms/Spacer';
import Title from '@/components/sp/common/atoms/Title';
import LabelTitle from '@/components/sp/common/molecules/LabelTitle';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

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
  height: ${size.ui.l12}px;
  line-height: ${size.ui.l12}px;
  font-weight: bold;
  font-size: ${size.font.pc.l3}px;
`;

/**
 * フッター上部のコンセプト
 */
const TopConcept: React.FC = (): JSX.Element => {
  const { color } = useColor();
  const concepts = [
    {
      name: 'デザイン',
      to: '/category/3',
    },
    {
      name: 'プロダクト設計',
      to: '/category/1',
    },
    {
      name: 'チームビルディング',
      to: '/category/2',
    },
    {
      name: '経営',
      to: '/category/4',
    },
  ];

  return (
    <Wrapper
      style={{
        background: color.footer.conceptBackground,
        color: color.footer.text,
      }}
    >
      <Inner>
        <Spacer.L />

        <LabelTitle
          size="XL"
          icon={faLightbulb}
          style={{
            color: color.footer.text,
            borderBottom: '1px solid #ffffff1c',
            paddingBottom: size.ui.l4,
          }}
        >
          Blog Concept
        </LabelTitle>

        <Spacer.L />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          TocoBlogは「プロダクトができる手前」を扱います。
        </Title>

        <Spacer.L />

        <Detail>
          {concepts.map((c, index: number) => (
            <Fragment key={c.name}>
              {index !== 0 && <Spacer.M />}

              <CategoryFrame
                style={{
                  border: `2px solid ${color.footer.text}`,
                }}
              >
                <Link
                  to={c.to}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    color: color.footer.text,
                  }}
                >
                  {c.name}
                </Link>
              </CategoryFrame>
            </Fragment>
          ))}
        </Detail>

        <Spacer.L />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          海外もキャッチアップし、分かりやすく、実用可能な記事を発信します。
        </Title>

        <Spacer.L />
      </Inner>
    </Wrapper>
  );
};

export default TopConcept;
