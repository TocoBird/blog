import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Flame from '../components/common/flame';
import TemplatePCArticleDetail from '../components/pc/templates/articleDetail';
import TemplateSPArticleDetail from '../components/sp/templates/articleDetail';
import { useResponsive } from '../modules/common/responsive';
import { adapterDomainArticleDetail } from '../modules/adapter/articleDetail';

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
      tocoBlog(id: $id) {
        data {
          id
          attributes {
            mainTitle
            mainText
            updatedAt
            category {
              data {
                attributes {
                  name
                }
                id
              }
            }
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
 * ページ: 記事詳細
 */
const ArticleDetail: React.FC<PageProps> = (page): JSX.Element => {
  const { isPC } = useResponsive();
  const { blog, categories } = adapterDomainArticleDetail(page);

  return (
    <Flame isPC={isPC}>
      {isPC ? (
        <TemplatePCArticleDetail blog={blog} categories={categories} />
      ) : (
        <TemplateSPArticleDetail blog={blog} categories={categories} />
      )}
    </Flame>
  );
};

export default ArticleDetail;