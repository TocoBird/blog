import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'linaria/react';
import React from 'react';
import Spacer from '@/components/pc/atoms/Spacer';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/common/size';

const Wrapper = styled.div`
  height: 160px;
  box-shadow: 0 0 12px #0f1c2c24;
`;
const Inner = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
const Item = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const ItemLinks = styled.div`
  padding-left: ${size.ui.l8}px;
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
        <Item>
          <StaticImage
            src="../../../../../images/TocoBlogLogo.png"
            alt="TocoBlog"
            height={40}
          />
        </Item>
        <Item>
          <ItemLinks>
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
          </ItemLinks>
        </Item>
      </Inner>
    </Wrapper>
  );
};

export default FooterInfo;
