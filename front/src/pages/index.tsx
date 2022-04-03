import React from 'react';
import { useFetchIndex } from '../modules/graphql/index';
import TemplateIndex from '../components/templates/index';
import Layout from '../components/layouts/base';

/**
 * ページ: トップ
 */
const Index: React.FC = (): JSX.Element => {
  const { blogs } = useFetchIndex();

  return (
    <Layout>
      <TemplateIndex blogs={blogs} />
    </Layout>
  );
};

export default Index;
