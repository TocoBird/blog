import { styled } from 'linaria/react';
import size from '@/modules/common/size';

/**
 * ボタン: カテゴリ
 */
export const ButtonCategory = styled.div`
  background: linear-gradient(45deg, #52bbb5, #52b398);
  color: white;
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
