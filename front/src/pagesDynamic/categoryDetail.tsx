import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Flame from '../components/common/flame';
import TemplatePCCategoryDetail from '../components/pc/templates/categoryDetail';
import TemplateSPCategoryDetail from '../components/sp/templates/categoryDetail';
import { useResponsive } from '../modules/common/responsive';
import { adapterDomainCategoryDetail } from '../modules/adapter/categoryDetail';

/**
 * 記事詳細の取得取得
 */
export const query = graphql`
  query ($id: ID) {
    strapi {
      categories {
        data {
          id
          attributes {
            name
          }
        }
      }
      tocoBlogs(filters: { category: { id: { eq: $id } } }) {
        data {
          id
          attributes {
            mainTitle
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
 * ページ: カテゴリー詳細
 */
const CategoryDetail: React.FC<PageProps> = (page): JSX.Element => {
  const { isPC } = useResponsive();
  const { blogs, categories } = adapterDomainCategoryDetail(page);

  return (
    <Flame isPC={isPC}>
      {isPC ? (
        <TemplatePCCategoryDetail blogs={blogs} categories={categories} />
      ) : (
        <TemplateSPCategoryDetail blogs={blogs} categories={categories} />
      )}
    </Flame>
  );
};

export default CategoryDetail;
