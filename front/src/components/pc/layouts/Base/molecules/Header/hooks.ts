import { useCookie } from '@/modules/common/cookie';

interface UseReturn {
  readonly isLight: boolean;
  readonly onClickDarkMode: () => void;
}
/**
 * Hooks: Header
 */
export const useHookHeader = (): UseReturn => {
  const { isLightMode, toggleMode } = useCookie();

  const isLight = isLightMode();

  const onClickDarkMode = (): void => {
    toggleMode();
  };

  return {
    isLight,
    onClickDarkMode,
  };
};
