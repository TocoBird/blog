import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/common/atoms/Spacer';
import Title from '@/components/pc/common/atoms/Title';
import LabelTitle from '@/components/pc/common/molecules/LabelTitle';
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
  border-radius: ${size.ui.l2}px;
  height: ${size.ui.l12}px;
  line-height: ${size.ui.l12}px;
  font-weight: bold;
  font-size: ${size.font.pc.l3}px;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;

/**
 * フッター上部のコンセプト
 */
const Concept: React.FC = (): JSX.Element => {
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
        <Spacer.XXXL />

        <LabelTitle
          size="XL"
          icon={faLightbulb}
          style={{
            color: color.footer.text,
            borderBottom: '1px solid #ffffff1c',
            paddingBottom: size.ui.l6,
          }}
        >
          Blog Concept
        </LabelTitle>

        <Spacer.XXXL />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          TocoBlogは「プロダクトができる手前」を扱います。
        </Title>

        <Spacer.XXL />

        <Detail>
          {concepts.map(c => (
            <CategoryFrame
              key={c.name}
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
          ))}
        </Detail>

        <Spacer.XXL />

        <Title
          size="S"
          style={{
            color: color.footer.text,
          }}
        >
          海外もキャッチアップし、分かりやすく、実用可能な記事を発信します。
        </Title>

        <Spacer.XXL />
      </Inner>
    </Wrapper>
  );
};

export default Concept;
