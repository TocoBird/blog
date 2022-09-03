import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCTop from '@/components/pc/templates/Top';
import TemplateSPTop from '@/components/sp/templates/Top';
import { adapterDomainTop } from '@/modules/adapter/top';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * GraphQL: 記事一覧の取得
 */
export const query = graphql`
  {
    strapi {
      categories {
        data {
          attributes {
            name
            toco_blogs(pagination: { limit: 8 }, sort: "id:desc") {
              data {
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
                id
              }
            }
          }
          id
        }
      }
      storyBlogs(pagination: { limit: 4 }, sort: "updatedAt:desc") {
        data {
          id
          attributes {
            thumbnail {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
            titleSub
            title
          }
        }
      }
    }
  }
`;

/**
 * ページ: トップ
 */
const Index: React.FC<PageProps> = (page: PageProps): JSX.Element => {
  const { categories, stroyBlogs } = adapterDomainTop(page);
  const option: MetaOption = {
    title: 'TocoBlog',
    keywords: 'tocoblog,プロダクト開発,記事,デザイン',
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
    thumbnail: '',
  };

  return (
    <Layout
      option={option}
      pc={<TemplatePCTop categories={categories} stroyBlogs={stroyBlogs} />}
      sp={<TemplateSPTop categories={categories} stroyBlogs={stroyBlogs} />}
    />
  );
};

export default Index;
