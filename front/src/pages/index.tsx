import React from 'react';
import { graphql, PageProps } from 'gatsby';
import TemplatePCTop from '@/components/pc/templates/Top';
import TemplateSPTop from '@/components/sp/templates/Top';
import Flame from '@/components/flame';
import { useResponsive } from '@/modules/common/responsive';
import { adapterDomainIndex } from '@/modules/adapter/index';
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
            toco_blogs(pagination: { limit: 5 }, sort: "id:desc") {
              data {
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
                id
              }
            }
          }
          id
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
  const { categories } = adapterDomainIndex(page);
  const option: MetaOption = {
    title: 'TocoBlog',
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: '',
  };

  return (
    <Flame isPC={isPC} option={option}>
      <div>{isPC && <TemplatePCTop categories={categories} />}</div>
      <div>{!isPC && <TemplateSPTop categories={categories} />}</div>
    </Flame>
  );
};

export default Index;
