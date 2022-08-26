import TocoBlogBackground from '../../../images/TocoBlogBackground.png';
import TocoBlogBackgroundDark from '../../../images/TocoBlogBackgroundDark.png';
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
      background: isDark
        ? `url(${TocoBlogBackgroundDark})`
        : `url(${TocoBlogBackground})`,
    },
    /** 文字の色 */
    text: {
      main: isDark ? d.white.blueThin : l.blue.dark,
      mainBold: isDark ? d.white.blue : l.blue.darkThin,
      mainBoldAccent: isDark ? d.white.blue : l.black.thin,
      mainBoldThin: isDark ? d.white.blue : l.blue.darkThinMore,
      mainThin: isDark ? d.white.blueDark : l.white.blue,
      link: isDark ? d.blue.purple : l.blue.purple,
      onImage: isDark ? d.basic.white : l.basic.white,
    },
    /** コンテンツ背景色 */
    box: {
      background: isDark ? d.blue.darkThin : l.basic.white,
      cardBackground: isDark ? d.blue.darkThinMore : l.basic.white,
    },
    /** ボタンの色 */
    button: {
      background: isDark ? d.emerald.gradient : l.emerald.thinGradient,
      text: isDark ? d.white.blue : l.basic.white,
      border: isDark ? '#8799a8' : l.basic.white,
    },
    /** サブボタンの色 */
    buttonSub: {
      background: isDark ? d.blue.darkThin : l.basic.white,
      text: isDark ? d.white.blueThin : l.white.blue,
    },
    /** ヘッダーの色 */
    header: {
      background: isDark ? d.blue.darkThinMore : l.blue.darkGradient,
    },
    /** フッターの色 */
    footer: {
      background: isDark ? d.blue.darkThinMore : l.blue.darkGradient,
      infoBackground: isDark ? d.blue.darkThin : '#1d1e20',
      conceptBackground: isDark
        ? 'linear-gradient(135deg, #3060cd, #0b817c)'
        : 'linear-gradient(135deg, #4a80ff, #0eb1d0)',
      text: isDark ? d.white.blueThin : l.basic.white,
    },
    /** 線の色 */
    bar: {
      background: isDark ? d.blue.darkThinVeryMore : l.white.blueAccent,
    },
    /** 枠線の色 */
    border: {
      h1: isDark ? '#4b5468' : '#e8efff',
      h1Accent: isDark
        ? 'linear-gradient(45deg, #4c7bba, #41796d)'
        : 'linear-gradient(45deg, #67a6fc, #bbeae0)',
      h2: isDark ? '#5f636c' : '#e7eaf0',
      h2Left: isDark ? '#5a6797' : '#79b4e3',
    },
    hTag: {
      background: isDark ? d.white.thinOpacity : l.white.blueMoreThin,
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
