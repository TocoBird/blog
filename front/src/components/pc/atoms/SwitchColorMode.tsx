import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React, { CSSProperties } from 'react';
import { useHookHeader } from '@/components/pc/layouts/Base/molecules/Header/hooks';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  line-height: initial;
  padding: 2px 0;
  border-radius: ${size.ui.l12}px;
  height: ${size.ui.l5}px;
  width: ${size.ui.l12}px;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  font-size: ${size.font.pc.l2}px;
`;
const Circle = styled.div`
  position: absolute;
  transition: 0.2s;
  width: ${size.ui.l5}px;
  height: ${size.ui.l5}px;
  border-radius: ${size.ui.l5}px;
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
}

/**
 * ボタン: カラーモード
 */
const SwitchColorMode: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();
  const { isLight, onClickDarkMode } = useHookHeader();

  return (
    <Wrapper
      style={{
        ...p.style,
        background: color.colorMode.background,
      }}
      onClick={onClickDarkMode}
    >
      <Circle
        style={{
          background: color.colorMode.circle,
          left: isLight ? 34 : 2,
        }}
      />
      <Icon
        icon={isLight ? faMoon : faSun}
        style={{
          color: color.colorMode.icon,
          left: isLight ? 6 : 'auto',
          right: isLight ? 'auto' : 6,
        }}
      />
    </Wrapper>
  );
};

export default SwitchColorMode;
