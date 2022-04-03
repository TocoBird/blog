import { useMediaQuery } from 'react-responsive';

interface UseReturn {
  /** PCのレイアウトかどうか */
  readonly isPC: boolean;
}

/**
 * レスポンシブの設定
 */
export const useResponsive = (): UseReturn => {
  const size = 800;
  const isPC = useMediaQuery({ query: `(min-width: ${size}px)` });

  return { isPC };
};
