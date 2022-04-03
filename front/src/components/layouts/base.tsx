import React from 'react';
import '../css/layout.css';

interface Props {
  readonly children?: JSX.Element | JSX.Element[];
}

/**
 * レイアウト
 */
const Layout: React.FC<Props> = (p: Props): JSX.Element => {
  return <>{p.children}</>;
};

export default Layout;
