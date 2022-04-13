import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';

const Wrapper = styled.div`
  height: 160px;
  box-shadow: 0 0px 12px #0f1c2c24;
`;
const Inner = styled.div`
  text-align: center;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

/**
 * フッター上部の情報
 */
const FooterInfo: React.FC = (): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper
      style={{
        background: color.footer.infoBackground,
        color: color.footer.text,
      }}
    >
      <Inner>
        <div>
          <StaticImage
            src="../../../../../images/TocoBlogLogo.png"
            alt="TocoBlog"
            height={30}
          />

          <Spacer.S />

          <div>
            <Link
              to="/privacy-policy"
              style={{
                color: color.footer.text,
              }}
            >
              プライバシーポリシー
            </Link>
          </div>

          <Spacer.S />

          <div>
            <Link
              to="/terms-of-service"
              style={{
                color: color.footer.text,
              }}
            >
              利用規約
            </Link>
          </div>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default FooterInfo;
