import { styled } from 'linaria/react';
import size from '@/modules/common/size';

/** height 最小 */
const XS = styled.div`
  height: ${size.ui.l1}px;
`;
/** height 小さい */
const S = styled.div`
  height: ${size.ui.l2}px;
`;
/** height 中間 */
const M = styled.div`
  height: ${size.ui.l4}px;
`;
/** height 大きい */
const XM = styled.div`
  height: ${size.ui.l5}px;
`;
/** height より大きい */
const L = styled.div`
  height: ${size.ui.l7}px;
`;
/** height 最大 */
const XL = styled.div`
  height: ${size.ui.l8}px;
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
