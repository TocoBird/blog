import { styled } from 'linaria/react';
import React, { CSSProperties } from 'react';

const Wrapper = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 1px 2px #0f1c2c21;
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
