import { useEffect, useState } from 'react';
import { useResponsive } from '@/modules/common/responsive';

interface UseReturn {
  readonly isPC: boolean;
  readonly isDidMounted: boolean;
}

/**
 * 共通のLayoutで使う
 */
export const useHooks = (): UseReturn => {
  const { isPC } = useResponsive();
  const [isDidMounted, setIsDidMounted] = useState<boolean>(false);

  /**
   * NOTE
   * ライブラリ的にcssの割り当てをpcとspにするため、mountされた後に描画しないといけない
   */
  useEffect(() => setIsDidMounted(true), []);

  return {
    isPC,
    isDidMounted,
  };
};
