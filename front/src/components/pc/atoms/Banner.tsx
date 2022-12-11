import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { styled } from 'linaria/react';
import React, { CSSProperties } from 'react';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const LinkInner = styled.div`
  border-radius: ${size.ui.l1}px;
  box-shadow: 0 2px 24px #0f1c2c12;
  img {
    border-radius: ${size.ui.l1}px;
  }
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
}

/**
 * 公式バナー
 */
const Banner: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  return (
    <Wrapper>
      <Link
        to="https://tocobird.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkInner
          style={{
            border: `${size.ui.l1}px solid ${color.box.background}`,
            ...p.style,
          }}
        >
          <StaticImage
            src="../../../images/TocoBirdGamesBanner.jpg"
            alt="TocoBirdGames"
          />
        </LinkInner>
      </Link>
    </Wrapper>
  );
};

export default Banner;
