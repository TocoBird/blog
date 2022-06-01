import { styled } from 'linaria/react';
import size from '@/modules/const/size';

/**
 * 画面中央のコンテンツ
 */
export default styled.div`
  margin: auto;
  min-width: ${size.responsive.pcMin}px;
  max-width: ${size.responsive.pcMax}px;
  padding: 0 ${size.ui.l8}px;
  box-sizing: border-box;
`;
