import { styled } from 'linaria/react';
import colors from '@/modules/common/colors';

/**
 * ボタン: カテゴリ
 */
export const ButtonCategory = styled.div`
  background: ${colors.button.background};
  color: ${colors.button.text};
  font-weight: bold;
  border-radius: 50px;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-shadow: 0 2px 8px #0f1c2c38;
  &:hover {
    opacity: 0.8;
  }
`;
