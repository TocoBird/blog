import path from 'path';
import type { Actions } from 'gatsby';
import { errorWrapper } from '../../common/error';
import { ResCategory } from '../../interfaces/response/gatsbyNode/categories';

const PAGE_PATH = `./src/pagesDynamic/categoryDetail.tsx`;

/**
 * ページ作成: カテゴリ一覧
 */
export const createPageCategories = (
  categories: ResCategory[],
  actions: Actions
): void => {
  try {
    const { createPage } = actions;

    categories.forEach((c: ResCategory) => {
      const id = c.id;

      createPage({
        path: `/category/${id}`,
        component: path.resolve(PAGE_PATH),
        context: {
          id,
        },
      });
    });
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:カテゴリ一覧');
  }
};
