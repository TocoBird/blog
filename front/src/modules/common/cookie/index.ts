import { useColorMode } from '@/modules/common/cookie/colorMode';

interface UserCookieReturn {
  readonly isLightMode: () => boolean;
  readonly toggleMode: () => void;
}

/**
 * クッキーを扱う
 */
export const useCookie = (): UserCookieReturn => {
  const { isLightMode, toggleMode } = useColorMode();

  return {
    isLightMode,
    toggleMode,
  };
};
