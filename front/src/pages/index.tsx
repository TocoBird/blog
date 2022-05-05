import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Frame from '@/components/frame';
import TemplatePCTop from '@/components/pc/templates/Top';
import TemplateSPTop from '@/components/sp/templates/Top';
import { adapterDomainIndex } from '@/modules/adapter/index';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * 記事一覧の取得
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
  const { isPC } = useResponsive();
  const { categories, stroyBlogs } = adapterDomainIndex(page);
  const option: MetaOption = {
    title: 'TocoBlog',
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: '',
  };

  return (
    <Frame isPC={isPC} option={option}>
      <div>
        {isPC && (
          <TemplatePCTop categories={categories} stroyBlogs={stroyBlogs} />
        )}
      </div>
      <div>
        {!isPC && (
          <TemplateSPTop categories={categories} stroyBlogs={stroyBlogs} />
        )}
      </div>
    </Frame>
  );
};

export default Index;
