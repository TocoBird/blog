import path from 'path';
import type { Actions } from 'gatsby';
import { errorWrapper } from '../../common/error';
import { ResTocoBlog } from '../../interfaces/response/gatsbyNode/tocoBlogs';

/**
 * ページ作成: 記事一覧
 */
export const createPageBlogs = (
  blogs: ResTocoBlog[],
  actions: Actions
): void => {
  try {
    const { createPage } = actions;

    const PAGE_PATH = `./src/pagesDynamic/articleDetail.tsx`;
    blogs.forEach((t: ResTocoBlog) => {
      const id = t.id;
      const urlid = t.attributes.urlid;

      createPage({
        path: `/article/${urlid}`,
        component: path.resolve(PAGE_PATH),
        context: {
          id,
        },
      });
    });
  } catch (e) {
    throw errorWrapper(e, 'ページ作成エラー:記事一覧');
  }
};
