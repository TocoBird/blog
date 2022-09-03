import { PageProps, graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCCategoryDetail from '@/components/pc/templates/CategoryDetail';
import TemplateSPCategoryDetail from '@/components/sp/templates/CategoryDetail';
import { adapterDomainCategoryDetail } from '@/modules/adapter/categoryDetail';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * GraphQL: 指定カテゴリの記事の取得
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
            urlid
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
  const { blogs, categories, categolyId } = adapterDomainCategoryDetail(page);
  const selectedCategoryName =
    categories.find(c => c.id === categolyId)?.name || '';
  const option: MetaOption = {
    title: `${selectedCategoryName} | TocoBlog`,
    keywords: 'tocoblog,プロダクト開発,記事一覧,カテゴリー詳細',
    description: `プロダクト開発の具体的な情報サイト。${selectedCategoryName}記事一覧 - TocoBlog`,
    thumbnail: '',
  };

  return (
    <Layout
      option={option}
      pc={
        <TemplatePCCategoryDetail
          blogs={blogs}
          categories={categories}
          selectedCategolyId={categolyId}
        />
      }
      sp={
        <TemplateSPCategoryDetail
          blogs={blogs}
          categories={categories}
          selectedCategolyId={categolyId}
        />
      }
    />
  );
};

export default CategoryDetail;
