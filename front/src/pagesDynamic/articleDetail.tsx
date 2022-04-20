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
                        formats
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
      storyBlogs(pagination: { limit: 3 }, sort: "id:desc") {
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
  const { blog, categories, favoriteBlogs, relatedBlogs, stroyBlogs } =
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
          stroyBlogs={stroyBlogs}
        />
      ) : (
        <TemplateSPArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedBlogs={relatedBlogs}
          stroyBlogs={stroyBlogs}
        />
      )}
    </Frame>
  );
};

export default ArticleDetail;
