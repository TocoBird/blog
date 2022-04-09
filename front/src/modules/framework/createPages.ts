import path from 'path';
import type { GatsbyNode } from 'gatsby';
import { Res } from '@/modules/interfaces/response/gatsbyNode';

export const srcCreatePages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

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
          }
        }
      }
    }
  `);

  const data = result?.data as Res;
  const tocoBlogs = data?.strapi?.tocoBlogs?.data || [];
  const categories = data?.strapi?.categories?.data || [];

  // 記事一覧
  const ARTICLE_DETAIL_PATH = `./src/pagesDynamic/articleDetail.tsx`;
  tocoBlogs.forEach(t => {
    const id = t.id;
    createPage({
      path: `/article/${id}`,
      component: path.resolve(ARTICLE_DETAIL_PATH),
      context: {
        id,
      },
    });
  });

  // カテゴリ一覧
  const CATEGORY_DETAIL_PATH = `./src/pagesDynamic/categoryDetail.tsx`;
  categories.forEach(c => {
    const id = c.id;
    createPage({
      path: `/category/${id}`,
      component: path.resolve(CATEGORY_DETAIL_PATH),
      context: {
        id,
      },
    });
  });
};
