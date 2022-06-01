import path from 'path';
import type { GatsbyNode, Actions } from 'gatsby';
import { errorWrapper } from '../common/error';
import { Res } from '../interfaces/response/gatsbyNode';
import { ResCategory } from '../interfaces/response/gatsbyNode/categories';
import { ResStoryBlog } from '../interfaces/response/gatsbyNode/storyBlogs';
import { ResTocoBlog } from '../interfaces/response/gatsbyNode/tocoBlogs';

/**
 * ページ作成: 記事一覧
 */
const createPageBlogs = (blogs: ResTocoBlog[], actions: Actions): void => {
  try {
    const { createPage } = actions;

    const ARTICLE_DETAIL_PATH = `./src/pagesDynamic/articleDetail.tsx`;
    blogs.forEach((t: ResTocoBlog) => {
      const id = t.id;
      const urlid = t.attributes.urlid;

      createPage({
        path: `/article/${urlid}`,
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
    categories.forEach((c: ResCategory) => {
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

/**
 * ページ作成: ストーリー記事一覧
 */
const createPageStoryBlogs = (
  blogs: ResStoryBlog[],
  actions: Actions
): void => {
  try {
    const { createPage } = actions;

    const ARTICLE_DETAIL_PATH = `./src/pagesDynamic/storyDetail.tsx`;
    blogs.forEach((t: ResStoryBlog) => {
      const id = t.id;

      createPage({
        path: `/story/${id}`,
        component: path.resolve(ARTICLE_DETAIL_PATH),
        context: {
          id,
        },
      });
    });
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:ストーリー記事一覧');
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
