import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Frame from '@/components/frame';
import TemplatePCArticleDetail from '@/components/pc/templates/ArticleDetail';
import TemplateSPArticleDetail from '@/components/sp/templates/ArticleDetail';
import { adapterDomainArticleDetail } from '@/modules/adapter/articleDetail';
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
      favoriteBlog {
        data {
          attributes {
            toco_blogs(sort: "id:desc") {
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
                  toco_blogs(
                    pagination: { limit: 2 }
                    sort: "id:desc"
                    filters: { not: { id: { eq: $id } } }
                  ) {
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
  const { blog, categories, favoriteBlogs, relatedBlogs } =
    adapterDomainArticleDetail(page);
  const option: MetaOption = {
    title: `${blog.title} | TocoBlog`,
    description: 'TocoBlogはプロダクト開発の情報を発信します。',
    thumbnail: blog.thumbnail,
  };

  return (
    <Frame isPC={isPC} option={option}>
      {isPC ? (
        <TemplatePCArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedBlogs={relatedBlogs}
        />
      ) : (
        <TemplateSPArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedBlogs={relatedBlogs}
        />
      )}
    </Frame>
  );
};

export default ArticleDetail;
