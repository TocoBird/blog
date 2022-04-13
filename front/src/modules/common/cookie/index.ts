import { useColorMode } from '@/modules/common/cookie/colorMode';

interface UserCookieReturn {
  readonly isLightMode: () => boolean;
  readonly isDarkMode: () => boolean;
  readonly toggleMode: () => void;
}

/**
 * クッキーを扱う
 */
export const useCookie = (): UserCookieReturn => {
  const { isLightMode, isDarkMode, toggleMode } = useColorMode();

  return {
    isLightMode,
    isDarkMode,
    toggleMode,
  };
};
