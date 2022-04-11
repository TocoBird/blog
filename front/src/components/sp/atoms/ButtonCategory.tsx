import { styled } from 'linaria/react';
import colors from '@/modules/common/colors';
import size from '@/modules/common/size';

/**
 * ボタン: カテゴリ
 */
export const ButtonCategory = styled.div`
  background: ${colors.button.background};
  color: ${colors.button.text};
  font-weight: bold;
  font-size: ${size.font.sp.l3}px;
  border-radius: 50px;
  padding: 0 20px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  box-shadow: 0 2px 8px #0f1c2c38;
  &:hover {
    opacity: 0.8;
  }
`;
