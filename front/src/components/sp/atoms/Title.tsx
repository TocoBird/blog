import { styled } from 'linaria/react';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

const Base = styled.div`
  font-weight: bold;
  color: ${colors.text.mainBold};
`;
const XS = styled(Base)`
  font-size: ${size.font.sp.l2}px;
`;
const S = styled(Base)`
  font-size: ${size.font.sp.l3}px;
`;
const M = styled(Base)`
  font-size: ${size.font.sp.l4}px;
`;
const XM = styled(Base)`
  font-size: ${size.font.sp.l5}px;
`;
const L = styled(Base)`
  font-size: ${size.font.sp.l6}px;
`;
const XL = styled(Base)`
  font-size: ${size.font.sp.l7}px;
`;

/**
 * タイトル
 * ここのスタイルは変えない
 */
const Title = {
  /** height: とても小さい */
  XS,
  /** height: 小さい */
  S,
  /** height: 中間 */
  M,
  /** height: 少し大きい */
  XM,
  /** height: 大きい */
  L,
  /** height: とても大きい */
  XL,
};

export default Title;
