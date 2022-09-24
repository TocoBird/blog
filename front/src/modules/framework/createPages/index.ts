import type { GatsbyNode } from 'gatsby';
import { Res } from '../../interfaces/response/gatsbyNode';
import { createPageBlogs } from './blogs';
import { createPageCategories } from './categories';
import { createPageStoryBlogs } from './storyBlogs';

/**
 * 動機ページの追加
 */
export const srcCreatePages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const result = await graphql(`
    query {
      strapi {
        categories(pagination: { limit: 10 }) {
          data {
            id
          }
        }
        tocoBlogs(pagination: { limit: 100 }) {
          data {
            id
            attributes {
              urlid
            }
          }
        }
        storyBlogs(pagination: { limit: 100 }) {
          data {
            id
          }
        }
      }
    }
  `);

  const data = result?.data as Res;
  const tocoBlogs = data?.strapi?.tocoBlogs?.data || [];
  const categories = data?.strapi?.categories?.data || [];
  const storyBlogs = data?.strapi?.storyBlogs?.data || [];

  /**
   * ページ作成
   */
  // 記事一覧
  createPageBlogs(tocoBlogs, actions);
  // カテゴリ一覧
  createPageCategories(categories, actions);
  // ストーリー記事一覧
  createPageStoryBlogs(storyBlogs, actions);
};
