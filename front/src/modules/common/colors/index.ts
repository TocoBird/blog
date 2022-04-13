import { d } from '@/modules/common/colors/dark';
import { l } from '@/modules/common/colors/light';
import { useCookie } from '@/modules/common/cookie';

interface Color {
  // todo
  readonly [name: string]: {
    readonly [name: string]: string;
  };
}

interface UseColor {
  readonly color: Color;
}

export const useColor = (): UseColor => {
  const { isDarkMode } = useCookie();

  const isDark = isDarkMode();

  const color: Color = {
    /** サイト背景色 */
    site: {
      background: isDark ? d.blue.dark : l.white.blueThin,
    },
    /** 文字の色 */
    text: {
      main: isDark ? d.white.blueThin : l.blue.dark,
      mainBold: isDark ? d.white.blue : l.blue.darkThin,
      mainBoldAccent: isDark ? d.white.blue : l.black.thin,
      mainBoldThin: isDark ? d.white.blue : l.blue.darkThinMore,
      mainThin: isDark ? d.white.blue : l.white.blue,
      link: isDark ? d.blue.purple : l.blue.purple,
      onImage: isDark ? d.white.blueThin : l.basic.white,
    },
    /** コンテンツ背景色 */
    box: {
      background: isDark ? d.blue.darkThin : l.basic.white,
    },
    /** ボタンの色 */
    button: {
      background: isDark ? d.emerald.gradient : l.emerald.thinGradient,
      text: isDark ? d.white.blueThin : l.basic.white,
    },
    /** ヘッダーの色 */
    header: {
      background: isDark ? d.blue.darkThinMore : l.blue.darkGradient,
    },
    /** フッターの色 */
    footer: {
      background: isDark ? d.blue.darkThinMore : l.blue.darkGradient,
      infoBackground: isDark ? d.blue.darkThin : '#343640',
      text: isDark ? d.white.blueThin : l.basic.white,
    },
    /** 線の色 */
    bar: {
      background: isDark ? d.blue.darkThinVeryMore : l.white.blueAccent,
    },
    /** 枠線の色 */
    border: {
      h1: isDark ? '#4b5468' : '#e8efff',
      h1Accent: isDark ? '#5e78a2' : '#c6d8f4',
      h2: isDark ? '#5f636c' : '#e7eaf0',
      h2Left: isDark ? '#5a6797' : '#b4c2f8',
    },
    /** 画像読み込み前の色 */
    image: {
      loadBackground: isDark ? d.blue.darkThinVeryMore : l.basic.whitesmoke,
    },
    /** カラーモード変更の色 */
    colorMode: {
      background: isDark ? '#cfbe6d' : '#fff28b',
    },
  };

  return {
    color,
  };
};
