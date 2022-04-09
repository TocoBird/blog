import { styled } from 'linaria/react';

/**
 * ボタン: カテゴリ
 */
export const ButtonCategory = styled.div`
  background: linear-gradient(45deg, #52bbb5, #52b398);
  color: white;
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
