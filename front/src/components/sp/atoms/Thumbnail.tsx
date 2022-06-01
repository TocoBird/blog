import { styled } from 'linaria/react';
import React, { CSSProperties } from 'react';
import LazyLoad from 'react-lazyload';

const Img = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0 1px 2px #0f1c2c21;
  border-radius: 2px;
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
  /**
   * lazyロードするかどうか。
   * 遅延を出させず一度に表示させたい場合は使用しない。
   */
  readonly isLazy?: boolean;
}

/**
 * サムネイル
 */
const Thumbnail: React.FC<Props> = (p: Props): JSX.Element => {
  const backgroundImage = `url('${p.url}')`;

  if (!p.isLazy)
    return (
      <Img
        style={{
          width: p.width,
          height: p.height,
          backgroundImage,
          ...p.style,
        }}
      />
    );

  return (
    <LazyLoad once={true}>
      <Img
        style={{
          width: p.width,
          height: p.height,
          backgroundImage,
          ...p.style,
        }}
      />
    </LazyLoad>
  );
};

export default Thumbnail;
