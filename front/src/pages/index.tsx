import React from 'react';
import { graphql, PageProps } from 'gatsby';
import TemplatePCIndex from '../components/pc/templates/index';
import TemplateSPIndex from '../components/sp/templates/index';
import Flame from '../components/common/flame';
import { useResponsive } from '../modules/common/responsive';
import { adapterDomainIndex } from '../modules/adapter/index';

/**
 * 記事一覧の取得
 */
export const query = graphql`
  {
    strapi {
      tocoBlogs {
        data {
          id
          attributes {
            mainTitle
            mainText
            thumbnail {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * ページ: トップ
 */
const Index: React.FC<PageProps> = (page): JSX.Element => {
  const { isPC } = useResponsive();
  const { blogs } = adapterDomainIndex(page);

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
