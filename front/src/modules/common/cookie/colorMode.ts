import { useCookies } from 'react-cookie';

const key = {
  name: 'darkmode',
  light: 'light',
  dark: 'dark',
};

interface UserReturn {
  readonly isLightMode: () => boolean;
  readonly isDarkMode: () => boolean;
  readonly toggleMode: () => void;
}

/**
 * カラーモード
 */
export const useColorMode = (): UserReturn => {
  const [cookies, setCookie] = useCookies([key.name]);

  /**
   * ライトモードかどうか
   */
  const isLightMode = (): boolean => {
    const mode = cookies[key.name];
    return mode !== key.dark;
  };

  /**
   * ダークモードかどうか
   */
  const isDarkMode = (): boolean => {
    const mode = cookies[key.name];
    return mode === key.dark;
  };

  /**
   * モードを切り替える
   */
  const toggleMode = (): void => {
    const isDark = isDarkMode();

    if (isDark) {
      console.log(key.light);
      setCookie(key.name, key.light, { path: '/' });
      return;
    }

    console.log(key.dark);
    // それ以外の場合darkに変える
    setCookie(key.name, key.dark, { path: '/' });
  };

  return {
    isLightMode,
    isDarkMode,
    toggleMode,
  };
};
