import { useMediaQuery } from 'react-responsive';
import size from '@/modules/const/size';

interface UseReturn {
  /** PCのレイアウトかどうか */
  readonly isPC: boolean;
}

/**
 * レスポンシブの設定
 */
export const useResponsive = (): UseReturn => {
  const isPC = useMediaQuery({
    minWidth: size.responsive.pcMin,
  });

  return { isPC };
};
