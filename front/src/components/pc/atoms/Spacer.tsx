import { styled } from 'linaria/react';
import size from '@/modules/common/size';

const XS = styled.div`
  height: ${size.ui.l2}px;
`;
const S = styled.div`
  height: ${size.ui.l3}px;
`;
const M = styled.div`
  height: ${size.ui.l4}px;
`;
const XM = styled.div`
  height: ${size.ui.l6}px;
`;
const L = styled.div`
  height: ${size.ui.l8}px;
`;
const XL = styled.div`
  height: ${size.ui.l10}px;
`;

/**
 * 余白：縦のみ設定している
 */
const Spacer = {
  /** height: 最小 */
  XS,
  /** height: 小さい */
  S,
  /** height: 中間 */
  M,
  /** height: 大きい */
  XM,
  /** height: さらに大きい */
  L,
  /** height: 最大 */
  XL,
};

export default Spacer;
