import { styled } from 'linaria/react';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

/**
 * コンテンツの背景
 */
export const Box = styled.div`
  border-radius: 4px;
  background: ${colors.card.main};
  box-shadow: 0 2px 12px #0f1c2c17;
  padding: ${size.ui.l6}px;
`;

/**
 * コンテンツの背景: padding大きい
 */
export const BoxL = styled(Box)`
  padding: ${size.ui.l10}px;
`;
