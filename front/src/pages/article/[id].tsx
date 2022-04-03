import React from 'react';
import Flame from '../../components/common/flame';
import { useResponsive } from '../../modules/common/responsive';

interface Props {
  readonly params: {
    readonly id: number;
  };
}

/**
 * ページ: 記事詳細
 */
const ArticleDetail: React.FC<Props> = (p: Props): JSX.Element => {
  const { isPC } = useResponsive();
  const id = Number(p?.params?.id || 0);
  console.log(id);

  return <Flame isPC={isPC}>{isPC ? <>ok</> : <>ok2</>}</Flame>;
};

export default ArticleDetail;
