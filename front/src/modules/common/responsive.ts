import { useMediaQuery } from 'react-responsive';
import size from './size';

interface UseReturn {
  /** PCのレイアウトかどうか */
  readonly isPC: boolean;
}

/**
 * レスポンシブの設定
 */
export const useResponsive = (): UseReturn => {
  const isPC = useMediaQuery({
    query: `(min-width: ${size.responsive.pcMin}px)`,
  });

  return { isPC };
};
