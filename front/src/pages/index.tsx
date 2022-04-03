import React from 'react';
import TemplatePCIndex from '../components/pc/templates/index';
import TemplateSPIndex from '../components/sp/templates/index';
import Flame from '../components/common/flame';
import { useResponsive } from '../modules/common/responsive';
import { useFetchIndex } from '../modules/graphql/index';

/**
 * ページ: トップ
 */
const Index: React.FC = (): JSX.Element => {
  const { isPC } = useResponsive();
  const { blogs } = useFetchIndex();

  return (
    <Flame isPC={isPC}>
      {isPC ? (
        <TemplatePCIndex blogs={blogs} />
      ) : (
        <TemplateSPIndex blogs={blogs} />
      )}
    </Flame>
  );
};

export default Index;
