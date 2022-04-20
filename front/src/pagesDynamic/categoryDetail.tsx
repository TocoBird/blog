import { PageProps, graphql } from 'gatsby';
import React from 'react';
import Frame from '@/components/frame';
import TemplatePCCategoryDetail from '@/components/pc/templates/CategoryDetail';
import TemplateSPCategoryDetail from '@/components/sp/templates/CategoryDetail';
import { adapterDomainCategoryDetail } from '@/modules/adapter/categoryDetail';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * 記事詳細の取得
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
      tocoBlogs(
        pagination: { limit: 20 }
        sort: "id:desc"
        filters: { category: { id: { eq: $id } } }
      ) {
        data {
          id
          attributes {
            mainTitle
            thumbnail {
              data {
                attributes {
                  url
                  formats
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
const CategoryDetail: React.FC<PageProps> = (page: PageProps): JSX.Element => {
  const { isPC } = useResponsive();
  const { blogs, categories, categolyId } = adapterDomainCategoryDetail(page);
  const selectedCategoryName =
    categories.find(c => c.id === categolyId)?.name || '';
  const option: MetaOption = {
    title: `${selectedCategoryName} | TocoBlog`,
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: '',
  };

  return (
    <Frame isPC={isPC} option={option}>
      {isPC ? (
        <TemplatePCCategoryDetail
          blogs={blogs}
          categories={categories}
          selectedCategolyId={categolyId}
        />
      ) : (
        <TemplateSPCategoryDetail
          blogs={blogs}
          categories={categories}
          selectedCategolyId={categolyId}
        />
      )}
    </Frame>
  );
};

export default CategoryDetail;
