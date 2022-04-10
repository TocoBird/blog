import path from 'path';
import type { GatsbyNode, Actions } from 'gatsby';
import { errorWrapper } from '../common/error';
import {
  Res,
  ResTocoBlog,
  ResCategory,
} from '../interfaces/response/gatsbyNode';

/**
 * ページ作成: 記事一覧
 */
const createPageBlogs = (blogs: ResTocoBlog[], actions: Actions): void => {
  try {
    const { createPage } = actions;

    const ARTICLE_DETAIL_PATH = `./src/pagesDynamic/articleDetail.tsx`;
    blogs.forEach(t => {
      const id = t.id;

      createPage({
        path: `/article/${id}`,
        component: path.resolve(ARTICLE_DETAIL_PATH),
        context: {
          id,
        },
      });
    });
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:記事一覧');
  }
};

/**
 * ページ作成: カテゴリ一覧
 */
const createPageCategories = (
  categories: ResCategory[],
  actions: Actions
): void => {
  try {
    const { createPage } = actions;

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
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:カテゴリ一覧');
  }
};

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
          }
        }
      }
    }
  `);

  const data = result?.data as Res;
  const tocoBlogs = data?.strapi?.tocoBlogs?.data || [];
  const categories = data?.strapi?.categories?.data || [];

  /**
   * ページ作成
   */
  // 記事一覧
  createPageBlogs(tocoBlogs, actions);
  // カテゴリ一覧
  createPageCategories(categories, actions);
};
