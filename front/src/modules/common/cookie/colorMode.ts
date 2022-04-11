import { useCookies } from 'react-cookie';

const key = {
  name: 'darkmode',
  light: 'light',
  dark: 'dark',
};

interface UserReturn {
  readonly isLightMode: () => boolean;
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
   * モードを切り替える
   */
  const toggleMode = (): void => {
    const mode = cookies[key.name];

    if (mode === key.light) {
      setCookie(key.name, key.dark);
      return;
    }

    if (mode === key.dark) {
      setCookie(key.name, key.light);
      return;
    }

    // それ以外の場合darkに変える
    setCookie(key.name, key.dark);
  };

  return {
    isLightMode,
    toggleMode,
  };
};
