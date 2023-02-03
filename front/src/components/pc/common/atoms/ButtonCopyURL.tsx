import { faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import React, { CSSProperties, ReactNode } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useColor } from '@/modules/common/colors';
import size from '@/modules/const/size';

const Wrapper = styled.div`
  font-weight: bold;
  border-radius: 50px;
  padding: ${size.ui.l2}px ${size.ui.l10}px;
  box-shadow: 0 2px 8px #0f1c2c38;
  text-align: center;
  box-sizing: border-box;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: ${size.ui.l1}px;
`;

interface Props {
  /** style */
  readonly style?: CSSProperties;
  readonly children: ReactNode;
}

/**
 * ボタン: URLコピー
 */
const ButtonCopyURL: React.FC<Props> = (p: Props): JSX.Element => {
  const { color } = useColor();

  /**
   * URLをコピーする
   */
  const onClickCopy = (): void => {
    alert('URLをコピーしました。');
  };

  return (
    <CopyToClipboard onCopy={onClickCopy} text={window.location.href}>
      <Wrapper
        style={{
          background: color.button.background,
          color: color.button.text,
          border: `2px solid ${color.button.border}`,
          ...p.style,
        }}
      >
        <Icon icon={faPaste} />
        {p.children}
      </Wrapper>
    </CopyToClipboard>
  );
};

export default ButtonCopyURL;
