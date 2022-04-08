import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Flame from '../components/common/Flame';
import TemplatePCArticleDetail from '../components/pc/templates/ArticleDetail';
import TemplateSPArticleDetail from '../components/sp/templates/ArticleDetail';
import { useResponsive } from '../modules/common/responsive';
import { adapterDomainArticleDetail } from '../modules/adapter/articleDetail';
import { MetaOption } from '../modules/interfaces/compornent/layout';

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
      favoriteBlog {
        data {
          attributes {
            toco_blogs {
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
const ArticleDetail: React.FC<PageProps> = (page: PageProps): JSX.Element => {
  const { isPC } = useResponsive();
  const { blog, categories, favoriteBlogs } = adapterDomainArticleDetail(page);
  const option: MetaOption = {
    title: `${blog.title} | TocoBlog`,
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: blog.thumbnail,
  };

  return (
    <Flame isPC={isPC} option={option}>
      {isPC ? (
        <TemplatePCArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
        />
      ) : (
        <TemplateSPArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
        />
      )}
    </Flame>
  );
};

export default ArticleDetail;
