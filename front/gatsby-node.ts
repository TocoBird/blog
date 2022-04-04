import path from 'path';
import type { GatsbyNode } from 'gatsby';
import { Res } from './src/modules/response/gatsbyNode';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      strapi {
        tocoBlogs {
          data {
            id
          }
        }
      }
    }
  `);

  const data = result?.data as Res;
  const tocoBlogs = data?.strapi?.tocoBlogs?.data || [];

  const ARTICLE_DETAIL_PATH = `./src/pagesDynamic/articleDetail.tsx`;
  tocoBlogs.forEach(tocoBlog => {
    const id = tocoBlog.id;
    createPage({
      path: `/article/${id}`,
      component: path.resolve(ARTICLE_DETAIL_PATH),
      context: {
        id,
      },
    });
  });
};
