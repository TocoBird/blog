import { styled } from 'linaria/react';
import React, { CSSProperties } from 'react';
// import colors from '@/modules/common/colors';

const Wrapper = styled.div`
  background: whitesmoke;
  background-size: cover;
  background-position: 50% 50%;
`;

interface Props {
  /** 横幅 */
  readonly width: string;
  /** 縦幅 */
  readonly height: string;
  /** 画像URL */
  readonly url: string;
  /** style */
  readonly style?: CSSProperties;
}

/**
 * サムネイル
 */
const Thumbnail: React.FC<Props> = (p: Props): JSX.Element => {
  const backgroundImage = `url('${p.url}')`;

  return (
    <Wrapper
      style={{
        width: p.width,
        height: p.height,
        backgroundImage,
        ...p.style,
      }}
    />
  );
};

export default Thumbnail;
