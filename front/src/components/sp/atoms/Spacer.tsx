import { styled } from 'linaria/react';
import size from '@/modules/const/size';

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
/** height: さらにとても大きい */
const XXL = styled.div`
  height: ${size.ui.l11}px;
`;
/** height: 一番大きい */
const XXXL = styled.div`
  height: ${size.ui.l12}px;
`;

/**
 * 余白：縦のみ設定している
 */
const Spacer = {
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
  /** height: さらにとても大きい */
  XXL,
  /** height: 一番大きい */
  XXXL,
};

export default Spacer;
