import { PageProps, graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/layouts';
import TemplatePCStoryDetail from '@/components/pc/templates/StoryDetail';
import TemplateSPStoryDetail from '@/components/sp/templates/StoryDetail';
import { adapterDomainStoryDetail } from '@/modules/adapter/storyDetail';
import { useResponsive } from '@/modules/common/responsive';
import { MetaOption } from '@/modules/interfaces/compornent/layout';

/**
 * ストーリー記事詳細の取得
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
      storyBlogs(
        pagination: { limit: 3 }
        sort: "updatedAt:desc"
        filters: { not: { id: { eq: $id } } }
      ) {
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
      storyBlog(id: $id) {
        data {
          attributes {
            title
            textIntroduction
            textConclusion
            updatedAt
            createdAt
            titleSub
            thumbnail {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
            toco_blogs {
              toco_blog {
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
              title
              text
            }
          }
        }
      }
    }
  }
`;

/**
 * ページ: ストーリー記事詳細
 */
const StoryDetail: React.FC<PageProps> = (page: PageProps): JSX.Element => {
  const { isPC } = useResponsive();
  const { storyBlog, categories, favoriteBlogs, relatedStoryBlogs } =
    adapterDomainStoryDetail(page);
  const option: MetaOption = {
    title: `${storyBlog.title} | TocoBlog`,
    description: 'プロダクト開発の具体的な情報サイト - TocoBlog',
    thumbnail: storyBlog.thumbnail,
  };

  return (
    <Layout isPC={isPC} option={option}>
      {isPC ? (
        <TemplatePCStoryDetail
          storyBlog={storyBlog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedStoryBlogs={relatedStoryBlogs}
        />
      ) : (
        <TemplateSPStoryDetail
          storyBlog={storyBlog}
          categories={categories}
          favoriteBlogs={favoriteBlogs}
          relatedStoryBlogs={relatedStoryBlogs}
        />
      )}
    </Layout>
  );
};

export default StoryDetail;
