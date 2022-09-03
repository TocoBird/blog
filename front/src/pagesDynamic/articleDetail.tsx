import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCArticleDetail from '@/components/pc/templates/ArticleDetail';
import TemplateSPArticleDetail from '@/components/sp/templates/ArticleDetail';
import { adapterDomainArticleDetail } from '@/modules/adapter/articleDetail';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * GraphQL: 記事詳細の取得
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
        }
      }
      storyBlogs(pagination: { limit: 3 }, sort: "updatedAt:desc") {
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
            urlid
            mainTitle
            mainText
            featureText
            seoDescription
            updatedAt
            createdAt
            category {
              data {
                attributes {
                  name
                  toco_blogs(
                    pagination: { limit: 2 }
                    sort: "updatedAt:desc"
                    filters: { not: { id: { eq: $id } } }
                  ) {
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
  const { blog, categories, favoriteBlogs, relatedBlogs, stroyBlogs } =
    adapterDomainArticleDetail(page);
  const option: MetaOption = {
    title: `${blog.title} | TocoBlog`,
    keywords: 'tocoblog,プロダクト開発,記事,デザイン,経営',
    description: blog.seoDescription + ' TocoBlog',
    thumbnail: blog.thumbnail,
  };

  return (
    <Layout
      option={option}
      pc={
        <TemplatePCArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedBlogs={relatedBlogs}
          stroyBlogs={stroyBlogs}
        />
      }
      sp={
        <TemplateSPArticleDetail
          blog={blog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedBlogs={relatedBlogs}
          stroyBlogs={stroyBlogs}
        />
      }
    />
  );
};

export default ArticleDetail;
