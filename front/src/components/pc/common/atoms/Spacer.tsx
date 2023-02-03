import { styled } from 'linaria/react';
import size from '@/modules/const/size';

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
const XXL = styled.div`
  height: ${size.ui.l11}px;
`;
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
